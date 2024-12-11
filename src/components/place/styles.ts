import { colors, fontFamily } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 16,
    flexDirection: 'row',
    padding: 8,
    paddingRight: 16,
    borderWidth: 1,
    borderColor: colors.gray[200],
    borderRadius: 12,
  },
  image: {
    width: 116,
    height: 104,
    borderRadius: 8,
    objectFit: 'cover',
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  details: {
    flex: 1,
    gap: 4,
  },
  title: {
    color: colors.gray[600],
    fontSize: 14,
    fontFamily: fontFamily.semiBold,
  },
  description: {
    color: colors.gray[500],
    fontSize: 12,
    fontFamily: fontFamily.regular,
  },
  cupomContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  cupomLabel: {
    color: colors.gray[400],
    fontSize: 12,
    fontFamily: fontFamily.regular,
  }
})