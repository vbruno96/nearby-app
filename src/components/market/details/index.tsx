import { Text, View } from 'react-native'

import { colors } from "@/styles/theme"
import { categoriesIcons } from '@/utils/categories-icons'
import { IconMapPin, IconPhone, IconScan, IconTicket } from '@tabler/icons-react-native'
import { styles } from "./styles"
import { Info } from '../info'
import { Coupons } from '../coupons'
import { CouponUsed } from '../couponUsed'
import { Rule } from '../rule'

export interface Market {
  address: string;
  categoryId: string;
  coupons: number;
  cover: string;
  description: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  phone: string;
  rules: {
    description: string;
    id: string;
    marketId: string;
  }[];
}

interface DetailsProps {
  data: Market
}

export function Details({ data: market }: DetailsProps) {
  const Icon = categoriesIcons[market.categoryId]

  return (
    <View style={styles.container}>
      <View
        style={styles.header}
      >
        <View style={styles.title}>
          <Text
            style={styles.name}
          >
            {market.name}
          </Text>
          <Icon
            size={24}
            color={colors.green.light}
          />
        </View>
        <Text style={styles.description}>
          {market.description}
        </Text>
        <Coupons amount={market.coupons} />
      </View>
      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.detailSubtitle}>Regulamento</Text>
          {
            market.rules.map(rule => (
              <Rule
                key={rule.id}
                description={rule.description}
              />
            ))
          }
        </View>
        <View style={styles.divider} />
        <View style={styles.detail}>
          <Text style={styles.detailSubtitle}>Informações</Text>
          <Info
            icon={IconMapPin}
            description={market.address}
          />
          <Info
            icon={IconPhone}
            description={market.phone}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.detail}>
          <Text style={styles.detailSubtitle}>Cupons usados</Text>
          <CouponUsed
            usedAt='2024-09-26T21:32'
          />
          <CouponUsed
            usedAt='2024-08-14T20:56:00'
          />
        </View>
      </View>
    </View>
  )
}