import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { styles } from "./styles"
import { IconTicket } from "@tabler/icons-react-native"
import { colors } from "@/styles/colors"

export interface Place {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
}

type PlaceProps = TouchableOpacityProps & {
  data: Place
}

export function Place({ data, ...props }: PlaceProps) {
  return (
    <TouchableOpacity style={ styles.container } {...props}>
      <Image source={{uri: data.cover}} style={ styles.image } />
      <View style={ styles.content }>
        <View style={ styles.details }>
          <Text style={ styles.title }>{ data.name }</Text>
          <Text style={ styles.description }>{ data.description }</Text>
        </View>
        <View style={ styles.cupomContainer }>
          <IconTicket size={16} color={colors.red.base} />
          <Text style={ styles.cupomLabel }>{ data.coupons } cupons disponíveis</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}