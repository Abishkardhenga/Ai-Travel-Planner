import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Colors } from "@/constants/Colors"
import { FontAwesome } from "@expo/vector-icons"

const HotelCard = () => {
  return (
    <View style={styles.hotelCard}>
      <Image
        style={styles.hotelImage}
        source={require("@/assets/images/onboardingImg.webp")}
      />
      <Text style={styles.hotelName}>Luxury Hotel</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 12,
        }}
      >
        <View style={styles.ratingContainer}>
          <FontAwesome name="star" size={16} color="gold" />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
        <Text style={styles.priceText}>$200 per night</Text>
      </View>
    </View>
  )
}

export default HotelCard

const styles = StyleSheet.create({
  hotelCard: {
    width: 180,
    height: 220,

    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginRight: 15,
    backgroundColor: Colors.WHITE,
  },
  hotelImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
  },
  hotelName: {
    fontFamily: "outfit-bold",
    fontSize: 16,
    marginTop: 10,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  ratingText: {
    fontFamily: "outfit-medium",
    fontSize: 14,
    marginLeft: 5,
    color: Colors.GRAY,
  },
  priceText: {
    fontFamily: "outfit-medium",
    color: Colors.GRAY,
    fontSize: 14,
    marginTop: 5,
  },
})
