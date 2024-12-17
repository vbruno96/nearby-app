import { Text, View } from "react-native"
import { IconTicket } from "@tabler/icons-react-native"

import { colors } from "@/styles/theme"
import { styles } from "./styles"

interface CouponsProps {
  amount: number
  variant?: 'small' | 'default'
}

export function Coupons({ amount, variant = 'default' }: CouponsProps) {
  
  if (variant === 'default') {
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
  } else {
    return (
      <View style={styles.containerSmall}>
        <IconTicket
          size={20}
          color={colors.red.base}
        />
        <Text style={styles.amountSmall}>
          { amount }
        </Text>
      </View>
    )
  }
  
}