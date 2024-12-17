import { Alert, StatusBar, Text, View } from "react-native"
import MapView, { Callout, Marker } from "react-native-maps"
import { api } from "@/services/api"
import { useEffect, useState } from "react"

import { Categories, type Category } from "@/components/categories"
import { Place } from "@/components/place"
import { Places } from "@/components/places"

import { colors, fontFamily } from "@/styles/theme"
import { router } from "expo-router"

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494
}

type Market = Place & {
  latitude: number,
  longitude: number
}

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([])
  const [markets, setMarkets] = useState<Market[]>([])

  const [selectedCategory, setSelectedCategory] = useState("")

  function handleSelectCategory(categoryId: string) {
    console.log(categoryId)
    setSelectedCategory(categoryId)
  }

  async function fetchCategories() {
    try {
      const { data } = await api.get<Category[]>('/categories')
      setCategories(data)
      setSelectedCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível carregar as categorias.")
    }
  }

  async function fetchMarkets() {
    try {
      if (!selectedCategory) {
        return
      }

      const { data } = await api.get<Market[]>(`/markets/category/${selectedCategory}`)
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível carregar os locais.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [selectedCategory])

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle='light-content' />
      <Categories
        data={categories}
        onSelect={handleSelectCategory}
        selected={selectedCategory}
      />
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          longitude: currentLocation.longitude,
          longitudeDelta: 0.01,
          latitude: currentLocation.latitude,
          latitudeDelta: 0.01,
        }}
      >
        <Marker
          image={require('@/assets/location.png')}
          identifier="current"
          coordinate={{
            longitude: currentLocation.longitude,
            latitude: currentLocation.latitude,
          }}
        />

        {
          markets.map((market) => (
            <Marker
              key={ market.id }
              identifier={ market.id }
              image={require('@/assets/pin.png')}
              coordinate={{
                latitude: market.latitude,
                longitude: market.longitude
              }}
              title={ market.name }
              description={ market.address }
            >
              <Callout onPress={() => router.navigate(`/market/${market.id}`)}>
                <View>
                  <Text
                  style={{
                    color: colors.gray[600],
                    fontFamily: fontFamily.semiBold,
                    fontSize: 14,
                  }}
                  >
                    { market.name }
                  </Text>
                  <Text
                  style={{
                    color: colors.gray[600],
                    fontFamily: fontFamily.regular,
                    fontSize: 12,
                  }}
                  >
                    { market.address }
                  </Text>
                </View>
              </Callout>
            </Marker>    
          ))
        }
      </MapView>
      <Places data={markets} />
    </View>
  )
}