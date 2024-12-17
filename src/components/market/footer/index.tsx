import { View } from 'react-native'
import { IconMapPin, IconScan } from '@tabler/icons-react-native'

import { styles } from './styles'
import { Button } from '@/components/button'

interface FooterProps {
  openAddressMap: () => void
  openReaderQRCode: () => void
}

export function Footer({ openAddressMap, openReaderQRCode }: FooterProps) {
  return (
    <View style={styles.container}>
      <Button
        onPress={openAddressMap}
        style={{ width: 56 }}
      >
        <Button.Icon icon={IconMapPin} />
      </Button>
      <Button
        onPress={openReaderQRCode}
        style={{ flex: 1 }}
      >
        <Button.Icon icon={IconScan} />
        <Button.Title>
          Ler QR Code
        </Button.Title>
      </Button>
    </View>
  )
}