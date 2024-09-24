import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React from "react"
import { Colors } from "@/constants/Colors"
import UserTripCard from "./UserTripCard"
import { TripData, UserTrip } from "@/types/trip.type"
import moment from "moment"
import { useRouter } from "expo-router"

interface typeTrip {
  userTrips: UserTrip[]
}
const UserTripList = ({ userTrips }: typeTrip) => {
  const LatestTrip: TripData = JSON.parse(userTrips[0].tripdata)

  console.log("udrt ytip ", userTrips[0].tripplan)
  const router = useRouter()
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Image
        style={{
          width: "100%",
          height: 202,
          borderRadius: 12,
          objectFit: "cover",
          marginTop: 12,
        }}
        source={require("../../assets/images/alien.webp")}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
        }}
      >
        {LatestTrip.name}, {LatestTrip.country}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
          🚌 {LatestTrip.traveler.title}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/trip-details",
            params: {
              trip: JSON.stringify(userTrips[0].tripdata),
            },
          })
        }
        style={{
          backgroundColor: Colors.PRIMARY,
          padding: 18,
          borderRadius: 16,
          marginTop: 8,
        }}
      >
        <Text
          style={{
            color: Colors.WHITE,
            textAlign: "center",
            fontFamily: "outfit-medium",
          }}
        >
          See Your Plan
        </Text>
      </TouchableOpacity>
      <View>
        <ScrollView
          style={{
            marginTop: 18,
          }}
        >
          {userTrips.map((item: UserTrip) => {
            return <UserTripCard item={item} />
          })}
        </ScrollView>
      </View>
    </View>
  )
}

export default UserTripList

const styles = StyleSheet.create({})
