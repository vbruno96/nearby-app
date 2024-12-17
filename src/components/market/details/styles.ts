import { StyleSheet } from "react-native"
import { colors, fontFamily } from "@/styles/theme"

export const styles = StyleSheet.create({
  container: {
    gap: 32,
    backgroundColor: colors.gray[100],
    marginTop: -32,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 32,
    paddingTop: 40,
  },
  header: {
    gap: 10,
  },
  description: {
    color: colors.gray[500],
    fontFamily: fontFamily.regular,
    fontSize: 16
  },
  details: {
    gap: 16,
    fontSize: 14,
  },
  detail: {
    gap: 12
  },
  detailSubtitle: {
    color: colors.gray[500],
    fontFamily: fontFamily.medium
  },
  divider: {
    backgroundColor: colors.gray[200],
    height: 1
  },
})