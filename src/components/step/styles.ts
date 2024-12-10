import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 16,
    flexDirection: "row"
  },
  icon: {
    width: 32,
    height: 32,
    color: colors.red.base
  },
  details: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.semiBold
  },
  description: {
    color: colors.gray[500],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
})