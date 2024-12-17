import { Text, View } from "react-native"
import { IconTicket } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"
import { styles } from "./styles"

interface CouponsProps {
  amount: number
}

export function Coupons({ amount }: CouponsProps) {
  return (
    <View style={styles.container}>
      <IconTicket
        size={24}
        color={colors.red.base}
      />
      <Text style={styles.description}>
        <Text style={styles.amount}>
          { amount }
        </Text>
        {' '}
        cupons disponíveis
      </Text>
    </View>
  )
}