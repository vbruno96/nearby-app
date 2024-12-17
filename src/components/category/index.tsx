import { Text, Pressable, PressableProps } from "react-native"
import { styles } from "./styles"
import { colors } from "@/styles/theme"
import { categoriesIcons } from "@/utils/categories-icons"

type CategoryProps = PressableProps & {
  iconId: string
  isSelected?: boolean
  name: string
}

export function Category({ iconId, isSelected = false, name, ...props }: CategoryProps) {
  const Icon = categoriesIcons[iconId]
  
  return (
    <Pressable
      style={[
        styles.container,
        isSelected && styles.containerSelected
      ]}
      {...props}
    >
      <Icon
        size={16}
        color={ colors.gray[isSelected ? 100 : 500] }
      />
      <Text
        style={[
          styles.text,
          isSelected && styles.textSelected
        ]}
      >
        { name }
      </Text>
    </Pressable>
  )
}