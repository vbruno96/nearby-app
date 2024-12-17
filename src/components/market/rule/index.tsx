import { Text, View } from 'react-native'

import { styles } from "./styles"

interface RuleProps {
  description: string
}

export function Rule({ description }: RuleProps) {
  return (
    <Text
      style={styles.description}
    >
      {`\u2022 ${description}`}
    </Text>
  )
}