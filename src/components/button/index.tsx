import { ActivityIndicator, Text, TextProps, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { IconProps as TablerIconProps } from "@tabler/icons-react-native"
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import React from "react"

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}

function Button({ children, style, isLoading = false, ...props }: ButtonProps) {
  return (
    <TouchableOpacity
      style={ [ styles.button, style ] }
      activeOpacity={0.8}
      disabled={isLoading}
      {...props}
    >
      { isLoading ? (
        <ActivityIndicator
          size="small"
          color={colors.gray[100]}
        />
      ) : (
        children
      ) }
    </TouchableOpacity>
  )
}

function Title({ children, ...props }: TextProps) {
  return (
    <Text {...props} style={ styles.title }>
      { children }
    </Text>
  )
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon
           size={24}
           color={colors.gray[100]}
         />
}

Button.Title = Title
Button.Icon = Icon

export {
  Button
}