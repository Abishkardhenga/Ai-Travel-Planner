import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "@/constants/Colors"

const StartNewTripCard = () => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text
        style={{
          fontSize: 25,
          fontFamily: "outfit-medium",
        }}
      >
        No Trips Planned Yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit",
          textAlign: "center",
          color: Colors.GRAY,
        }}
      >
        Looks like its Time to plan a new travel experiences ? Get Started Below
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 20,
          borderRadius: 12,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            fontFamily: "outline-medium",
            fontSize: 18,
          }}
        >
          Start a New Trip
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default StartNewTripCard

const styles = StyleSheet.create({})
