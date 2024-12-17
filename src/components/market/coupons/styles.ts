import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red.light,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  description: {
    color: colors.gray[600],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },
  amount: {
    color: colors.gray[600],
    fontFamily: fontFamily.bold,
  },
  containerSmall: {
    backgroundColor: colors.red.light,
    color: colors.gray[600],
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  amountSmall: {
    color: colors.gray[600],
    fontSize: 16,
    fontFamily: fontFamily.regular,
  },
})