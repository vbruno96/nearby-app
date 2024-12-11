import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    height: 56,
    maxHeight: 56,
    borderRadius: 12,
    backgroundColor: colors.green.base,
  },
  title: {
    color: colors.gray[100],
    fontFamily: fontFamily.semiBold,
    fontSize: 16,
  },
})