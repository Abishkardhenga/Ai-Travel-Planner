import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard"

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([])
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 30,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 35, fontFamily: "outfit-bold" }}>
          My Trips
        </Text>
        <TouchableOpacity>
          <Ionicons name="add-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </View>
  )
}

export default MyTrip

const styles = StyleSheet.create({})
