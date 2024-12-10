import { ActivityIndicator, Image, View } from "react-native"
import { styles } from "./styles"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from "react-native-reanimated"

export function Loading() {
  const spin = useSharedValue(0)
  spin.value = withRepeat(withTiming(360, { duration: 1000, easing: Easing.inOut(Easing.linear) }), -1, false)
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        rotateZ: `${spin.value}deg`
      }
    ]
  }))

  return <View
           style={ styles.container }
         >
          <Animated.Image
            source={ require("@/assets/loader.png") }
            style={ animatedStyle }
          />
         </View>
}