import { StyleSheet, Text, View, Image } from "react-native"
import React from "react"
import { Colors } from "@/constants/Colors"
import { TripData, UserTrip } from "@/types/trip.type"
import moment from "moment"

interface userTrip {
  item: UserTrip
}

const UserTripCard = ({ item }: userTrip) => {
  const LatestTrip: TripData = JSON.parse(item.tripdata)
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
          {LatestTrip.name}, {LatestTrip.country}
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
          }}
        >
          {moment(LatestTrip.startDate).format("DD MMM yy")}
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
          }}
        >
          Travelling : {LatestTrip.traveler.title}
        </Text>
      </View>
    </View>
  )
}

export default UserTripCard

const styles = StyleSheet.create({})
