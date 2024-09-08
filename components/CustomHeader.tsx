import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import { router } from "expo-router"
import { Colors } from "@/constants/Colors"

type propsText = {
  text: string
}

const CustomHeader = ({ text }: propsText) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 80,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 24,
        }}
      >
        {text ? text : " "}
      </Text>
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({})
