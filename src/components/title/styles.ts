import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  title: {
    color: colors.gray[600],
    fontFamily: fontFamily.bold,
    fontSize: 20,
  }
})