import { View, Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import { Place } from "../place";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { router } from "expo-router";



interface PlacesProps {
  data: Place[]
}

export function Places({ data }: PlacesProps) {
  const dimensions = useWindowDimensions()
  const bottomSheetRef = useRef<BottomSheet>(null)

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128
  }

  return (
    <BottomSheet 
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={ styles.indicator }
      backgroundStyle={ styles.container }
      enableOverDrag={ false }
    >
      <BottomSheetFlatList
        data={data}
        keyExtractor={place => place.id}
        renderItem={({item}) => (
          <Place
            onPress={() => router.navigate(`/market/${item.id}`)}
            data={item}
          />
        )}
        contentContainerStyle={ styles.content }
        ListHeaderComponent={() => (
          <Text style={ styles.title }>
            Explore locais perto de você
          </Text>
        )}
        showsVerticalScrollIndicator={ false }
      />
    </BottomSheet>
  )
}