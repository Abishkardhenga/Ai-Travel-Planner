import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import { Colors } from "@/constants/Colors"

const UserTripCard = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 22,
        marginTop: 12,
      }}
    >
      <Image
        style={{
          width: 90,
          height: 90,
          borderRadius: 12,
          objectFit: "cover",
        }}
        source={require("../../assets/images/alien.webp")}
      />
      <View>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          LAS, Vegas , Nv ,Usa
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
          }}
        >
          04 July 2024
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
          }}
        >
          Travelling : Just Me
        </Text>
      </View>
    </View>
  )
}

export default UserTripCard

const styles = StyleSheet.create({})
