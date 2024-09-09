import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useContext, useEffect } from "react"
import { router, useNavigation } from "expo-router"
import { CreateTripContext } from "@/context/CreateTripContext"
import CustomHeader from "@/components/CustomHeader"
import { Colors } from "@/constants/Colors"
import moment from "moment"
const ReviewTrip = () => {
  const navigation = useNavigation()
  const { tripData, setTripData } = useContext(CreateTripContext)

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  useEffect(() => {
    console.log("tripdata", tripData)
  }, [])

  const onBuildTrip = () => {
    router.push("/create-trip/generate-trip")
  }

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          padding: 20,
        }}
      >
        <CustomHeader text="" />
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
            paddingTop: 12,
          }}
        >
          Review Your Trip
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: Colors.GRAY,
            paddingTop: 12,
          }}
        >
          Before generating Your trip , please review your selection
        </Text>
        {/* //Destination  */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 22,
          }}
        >
          <Text
            style={{
              fontSize: 28,
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 20,
              }}
            >
              Destination
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.name}, {tripData?.country}
            </Text>
          </View>
        </View>
        {/* // Travle Date */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 22,
          }}
        >
          <Text
            style={{
              fontSize: 28,
            }}
          >
            📅
          </Text>
          <View>
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 20,
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM")},
              {moment(tripData?.endDate).format("DD  MMM")} (
              {tripData?.totalDays} Days )
            </Text>
          </View>
        </View>
        {/* who is traveling ? */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 22,
          }}
        >
          <Text
            style={{
              fontSize: 28,
            }}
          >
            🚌
          </Text>
          <View>
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 20,
              }}
            >
              Who is Traveling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>
        {/* ?? budget ? */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            gap: 22,
          }}
        >
          <Text
            style={{
              fontSize: 28,
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                color: Colors.GRAY,
                fontFamily: "outfit",
                fontSize: 20,
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.budget}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onBuildTrip}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 14,
            width: "100%",
            borderRadius: 12,
            right: 13,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outline-medium",
              fontSize: 18,
            }}
          >
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ReviewTrip

const styles = StyleSheet.create({})
