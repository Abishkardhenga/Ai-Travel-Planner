import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams, useNavigation } from "expo-router"
import CustomHeader from "@/components/CustomHeader"
import { TripData } from "@/types/trip.type"
import { Colors } from "@/constants/Colors"

const index = () => {
  const [tripDetails, setTripDetails] = useState<TripData>()

  const navigation = useNavigation()

  const { trip } = useLocalSearchParams()

  const newTrip: TripData =
    trip && typeof trip === "string" ? JSON.parse(trip) : null

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
    if (newTrip) {
      console.log("newTrip ", newTrip)
      console.log("newTrip country", newTrip.country)
      setTripDetails(newTrip)
    }
  }, [newTrip])

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
        }}
      >
        <CustomHeader text="Trip Details" />
        <Image
          style={{
            width: "100%",
            height: 222,
            objectFit: "cover",
            marginTop: 12,
          }}
          source={require("../../assets/images/alien.webp")}
        />
        <View
          style={{
            height: "100%",
            marginTop: -15,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            padding: 20,
            backgroundColor: Colors.WHITE,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 20,
            }}
          >
            {newTrip.name}
            {newTrip.country}
            dhegan
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.GRAY,
                fontSize: 14,
              }}
            >
              05 July 3003
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 14,
                color: Colors.GRAY,
              }}
            >
              05 July 3003
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.GRAY,
              fontSize: 14,
            }}
          >
            ✈️ Just Me
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
