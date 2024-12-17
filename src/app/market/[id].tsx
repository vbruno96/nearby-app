
import { useEffect, useRef, useState } from 'react'
import { Alert, Modal, Text, View } from 'react-native'
import { IconArrowLeft, IconMapPin, IconPhone } from '@tabler/icons-react-native'
import MapView, { Marker } from 'react-native-maps'
import { router, useLocalSearchParams } from 'expo-router'
import { CameraView, useCameraPermissions } from 'expo-camera'

import { api } from '@/services/api'

import { Market as MarketDetailsProps } from "@/components/market/details"
import { Loading } from '@/components/loading';
import { Cover } from '@/components/market/cover'
import { Details } from '@/components/market/details'
import { Footer } from '@/components/market/footer'
import { Button } from '@/components/button'
import { colors, fontFamily } from '@/styles/theme'
import { Info } from '@/components/market/info'

export default function Market() {
  const [_, requestPermission] = useCameraPermissions()

  const { id } = useLocalSearchParams<{ id: string }>()

  const qrLock = useRef(false)

  const [market, setMarket] = useState({} as MarketDetailsProps)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ isModalReadQRCodeOpen, setIsModalReadQRCodeOpen ] = useState(false);
  const [ isModalMarketAddressOpen, setIsModalMarketAddressOpen ] = useState(false);
  const [ isFetchingCoupon, setIsFetchingCoupon ] = useState(false)
  const [ coupon, setCoupon ] = useState('')

  async function fetchMarket() {
    try {
      const { data } = await api.get(`/markets/${id}`)
      setMarket(data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      Alert.alert('Erro', 'Não foi possível carregar os dados do mercado', [
        {
          text: 'Voltar',
          onPress: () => router.back()
        }
      ])
    }
  }

  async function handleOpenReadQRCode() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert('Câmera', 'É necessário conceder a permissão de acesso a câmera')
      }

      qrLock.current = false
      setIsModalReadQRCodeOpen(true)
    } catch (error) {
      console.log(error)
      Alert.alert('Câmera', 'Não foi possível ter acesso a câmera')
    }
  }

  function handleUseCoupon(id: string) {
    setIsModalReadQRCodeOpen(false)

    Alert.alert('Cupon', 'Não foi possível reutilizar um cupom resgatado. \nDeseja realmente resgatar o cupom?', [
      { style: 'cancel', text: 'Nao' },
      { text: 'Sim', onPress: () => getCoupon(id) },
    ])
  }

  function handleOpenAddressmodal() {
    setIsModalMarketAddressOpen(true)
  }

  async function getCoupon(id: string) {
    try {
      setIsFetchingCoupon(true)
      const { data } = await api.patch(`/coupons/${id}`)
      Alert.alert('Cupom', data.coupom)
      setCoupon(data.coupon)
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível utilizar o cupom')
      console.log(error)
    } finally {
      setIsFetchingCoupon(false)
    }
  }

  useEffect(() => {
    fetchMarket()
  }, [id, coupon])

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <Cover uri={market.cover} />
      <Details data={market} />

      <Footer
        openReaderQRCode={handleOpenReadQRCode}
        openAddressMap={handleOpenAddressmodal}
      />

      <Modal
        style={{ flex: 1 }}
        visible={isModalReadQRCodeOpen}
      >
        <CameraView
          style={{ flex: 1 }}
          facing='back'
          onBarcodeScanned={({ data }) => {
            if (data && !qrLock.current) {
              qrLock.current = true
              setTimeout(() => handleUseCoupon(data), 500)
            }
          }}
        />
        <Button
          style={{
            position: 'absolute',
            top: 56,
            left: 24,
            width: 40,
            height: 40,
          }}
          onPress={() => setIsModalReadQRCodeOpen(false)}
          isLoading={isFetchingCoupon}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
      </Modal>
      <Modal
        style={{ flex: 1 }}
        visible={isModalMarketAddressOpen}
      >
        <MapView 
          style={{ flex: 1 }}
          initialRegion={{
            longitude: market.longitude,
            longitudeDelta: 0.001,
            latitude: market.latitude,
            latitudeDelta: 0.001,
          }}
        >
          <Marker
            image={require('@/assets/pin.png')}
            identifier="current"
            coordinate={{
              longitude: market.longitude,
              latitude: market.latitude,
            }}
          />
        </MapView>
        <Button
          style={{
            position: 'absolute',
            top: 56,
            left: 24,
            width: 40,
            height: 40,
          }}
          onPress={() => setIsModalMarketAddressOpen(false)}
          isLoading={isFetchingCoupon}
        >
          <Button.Icon icon={IconArrowLeft} />
        </Button>
        <View style={{
          position: 'absolute',
          left: 16,
          right: 16,
          bottom: 40,
          backgroundColor: colors.gray[100],
          gap: 16,
          paddingHorizontal: 24,
          paddingBottom: 28,
          paddingTop: 20,
          marginTop: 'auto',
          borderRadius: 16,
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Text style={{
              color: colors.gray[600],
              fontFamily: fontFamily.bold,
              fontSize: 20,
            }}>
              {market.name}
            </Text>
          </View>
          <Info description={market.address} icon={IconMapPin} />
          <Info description={market.phone} icon={IconPhone} />
        </View>
      </Modal>
    </View>
  )
}