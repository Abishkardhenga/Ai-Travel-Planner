import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import React from "react"
import { Colors } from "@/constants/Colors"
import UserTripCard from "./UserTripCard"

const UserTripList = ({ userTrips }: any) => {
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
        LAS, Vegas , Nv ,Usa{" "}
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
          04 July 2024
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
          }}
        >
          🚌 Just Me
        </Text>
      </View>
      <View
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
      </View>
      <View>
        <ScrollView
          style={{
            marginTop: 18,
          }}
        >
          <UserTripCard />
          <UserTripCard />
          <UserTripCard />
          <UserTripCard />
          <UserTripCard />
          <UserTripCard />
          <UserTripCard />
        </ScrollView>
      </View>
    </View>
  )
}

export default UserTripList

const styles = StyleSheet.create({})
