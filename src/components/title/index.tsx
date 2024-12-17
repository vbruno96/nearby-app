import React from "react"
import { Text, View } from "react-native"
import { IconProps } from "@tabler/icons-react-native"

import { colors } from '@/styles/theme'
import { styles } from "./styles"
import { categoriesIcons } from "@/utils/categories-icons"

interface HeadingProps {
  categoryId: string
  title: string
}

export function Heading({ categoryId, title }: HeadingProps) {
  const Icon = categoriesIcons[categoryId]
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Icon size={24} color={colors.green.light} />
    </View>
  );
}
