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
      console.log("newTrip", newTrip)
      console.log("newTrip", newTrip.country)
      setTripDetails(newTrip)
      console.log("tripDetails", tripDetails)
    }
  }, [])

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
          </Text>
          <View>
            <Text></Text>
            <Text></Text>
          </View>
          <Text></Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})
