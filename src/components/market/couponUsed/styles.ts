import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  description: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium
  },
})