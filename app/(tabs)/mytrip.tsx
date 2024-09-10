import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { Colors } from "@/constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard"
import {
  collection,
  DocumentData,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import { getAuth } from "firebase/auth"
import UserTripList from "@/components/MyTrips/UserTripList"
import { UserTrip } from "@/types/trip.type"
import { db } from "@/configs/firebase.config"

const MyTrip = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [userTrips, setUserTrips] = useState<UserTrip[]>([])
  const user = getAuth()

  useEffect(() => {
    getMyTrips()
  }, [user])

  const getMyTrips = async () => {
    setLoading(true)
    setUserTrips([])
    const q = query(
      collection(db, "usertrip"),
      where("email", "==", user.currentUser?.email)
    )

    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data())
      setUserTrips((prev) => [...prev, doc.data() as UserTrip]) // Casting DocumentData to UserTrip
    })
    setLoading(false)
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 25,
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
          {loading && (
            <ActivityIndicator size={"large"} color={Colors.PRIMARY} />
          )}
          {userTrips.length === 0 ? (
            <StartNewTripCard />
          ) : (
            <UserTripList userTrips={userTrips} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MyTrip

const styles = StyleSheet.create({})
