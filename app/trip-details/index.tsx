import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native"
import React, { useEffect, useState } from "react"
import { useLocalSearchParams, useNavigation } from "expo-router"
import CustomHeader from "@/components/CustomHeader"
import { TripData } from "@/types/trip.type"
import { Colors } from "@/constants/Colors"
import moment from "moment"
import { FontAwesome } from "@expo/vector-icons" // For the flight icon
import HotelCard from "@/components/HotelCard"

const index = () => {
  const [tripDetails, setTripDetails] = useState<TripData>()
  let data

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
      data = JSON.parse(newTrip)
      setTripDetails(data)
    }
  }, [newTrip])

  return (
    <SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ height: "100%" }}>
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
            <Text style={styles.tripTitle}>
              {tripDetails?.name} , {tripDetails?.country}
            </Text>
            <View style={styles.dateContainer}>
              <Text style={styles.dateText}>
                {moment(tripDetails?.startDate).format("DD MMM YYYY")}
              </Text>
              <Text style={styles.dateText}>
                {moment(tripDetails?.endDate).format("DD MMM YYYY")}
              </Text>
            </View>
            <Text style={styles.travelerInfo}>
              ✈️ {tripDetails?.traveler.title}
            </Text>

            <View style={styles.cardContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="plane"
                  size={24}
                  color="black"
                  style={styles.flightIcon}
                />
                <TouchableOpacity
                  style={{
                    backgroundColor: "black",
                    borderRadius: 8,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                    elevation: 5,
                  }}
                >
                  <Text style={styles.bookButtonText}>Book Here</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.airlineText}>Airline: {}</Text>
              <Text style={styles.priceText}>Price: $500 approx</Text>
            </View>

            {/* Hotel Recommendations Section */}
            <Text style={styles.hotelTitle}>Hotel Recommendations</Text>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HotelCard />
              <HotelCard />
              <HotelCard />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  tripTitle: {
    fontFamily: "outfit-bold",
    fontSize: 20,
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  dateText: {
    fontFamily: "outfit-medium",
    color: Colors.GRAY,
    fontSize: 14,
  },
  travelerInfo: {
    fontFamily: "outfit",
    color: Colors.GRAY,
    fontSize: 14,
  },
  cardContainer: {
    marginTop: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    opacity: 0.7,
    padding: 15,
    backgroundColor: Colors.WHITE,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  flightIcon: {
    marginBottom: 10,
  },
  bookButtonText: {
    color: "white",
    fontFamily: "outfit-bold",
    fontSize: 18,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  airlineText: {
    fontFamily: "outfit-medium",
    color: Colors.GRAY,
    fontSize: 14,
    marginTop: 10,
  },

  hotelTitle: {
    fontFamily: "outfit-bold",
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
  },
  priceText: {
    fontFamily: "outfit-medium",
    color: Colors.GRAY,
    fontSize: 14,
    marginTop: 5,
  },
})
