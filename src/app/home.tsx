import { Alert, Text, View } from "react-native"
import { api } from "@/services/api"
import { useEffect, useState } from "react"

import { Categories, type Category } from "@/components/categories"
import { Place } from "@/components/place"
import { Places } from "@/components/places"

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([])
  const [markets, setMarkets] = useState<Place[]>([])

  const [selectedCategory, setSelectedCategory] = useState("")

  function handleSelectCategory(categoryId: string) {
    setSelectedCategory(categoryId)
  }

  async function fetchCategories() {
    try {
      const { data } = await api.get<Category[]>('/categories')
      setCategories(data)
      setSelectedCategory(data[0].id)
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível carregar as categorias.")
    }
  }

  async function fetchMarkets() {
    try {
      if (!selectedCategory) {
        throw new Error('Nenuma categoria informada')
      }

      const { data } = await api.get<Place[]>(`/markets/category/${selectedCategory}`)
      setMarkets(data)
    } catch (error) {
      console.log(error)
      Alert.alert("Não foi possível carregar os locais.")
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    fetchMarkets()
  }, [selectedCategory])

  return (
    <View style={{ flex: 1 }}>
      <Categories
        data={categories}
        onSelect={handleSelectCategory}
        selected={selectedCategory}
      />
      <Places data={markets} />
    </View>
  )
}