import { FlatList } from "react-native"
import { styles } from "./styles"
import { Category } from "../category"

export interface Category {
  id: string
  name: string
}

interface CategoriesProps {
  data: Category[],
  selected: string,
  onSelect: (categoryId: string) => void
}

export function Categories({ data, onSelect, selected }: CategoriesProps) {
    
  return (
    <FlatList
      style={ styles.container }
      contentContainerStyle={ styles.content }
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Category
          name={item.name}
          iconId={item.id}
          isSelected={item.id === selected}
          onPress={() => onSelect(item.id)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}