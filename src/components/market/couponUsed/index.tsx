import React from 'react'
import { Text, View } from 'react-native'
import { IconTicket } from '@tabler/icons-react-native'

import { colors } from '@/styles/theme'
import { styles } from './styles'

interface CouponUsedProps {
  usedAt: string
}

export function CouponUsed({ usedAt }: CouponUsedProps) {
  const usedAtDateTime = new Date(usedAt).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }).replace(',', ' às')
  
  return (
    <View style={styles.container}>
      <IconTicket
        size={16}
        color={colors.green.light}
      />
      <Text style={styles.description}>
        {usedAtDateTime}
      </Text>
    </View>
  )
}