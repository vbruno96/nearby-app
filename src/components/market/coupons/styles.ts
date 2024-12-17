import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red.light,
    color: colors.gray[600],
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  amount: {
    fontFamily: fontFamily.bold,
  },
})