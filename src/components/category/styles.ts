import { colors, fontFamily } from "@/styles/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: colors.gray[100],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray[300],
    borderRadius: 8,
  },
  text: {
    color: colors.gray[500],
    fontSize: 14,
    fontFamily: fontFamily.regular
  },
  containerSelected: {
    backgroundColor: colors.green.base,
    borderWidth: 0,
  },
  textSelected: {
    color: colors.gray[100]
  }
})