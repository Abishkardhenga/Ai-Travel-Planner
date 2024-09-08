import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import CustomHeader from "@/components/CustomHeader"
import { SelectTravelerList } from "@/constants/Options"
import OptionCard from "@/components/OptionCard"
import { travelerType } from "@/constants/Options"
import { Colors } from "@/constants/Colors"
import { CreateTripContext } from "@/context/CreateTripContext"
import { router } from "expo-router"

const SelectTraveler = () => {
  const [selectedOptionCard, setSelectedOptionCard] = useState<travelerType>()
  const { tripData, setTripData } = useContext(CreateTripContext)

  const onPressCard = (item: travelerType) => {
    setSelectedOptionCard(item)

    setTripData({
      ...tripData,
      travelData: item,
    })
  }

  useEffect(() => {
    console.log("tripdata ", tripData)
  }, [tripData])
  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <View
        style={{
          padding: 15,
          height: "100%",
          backgroundColor: Colors.WHITE,
        }}
      >
        <CustomHeader text=" " />
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 35,
            paddingTop: 12,
          }}
        >
          Who's Going ?
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 25,
          }}
        >
          Choose Your Traveles
        </Text>

        <FlatList
          data={SelectTravelerList}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => onPressCard(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard
                item={item}
                selectedOptionCard={selectedOptionCard!}
              />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={() => router.push("/create-trip/select-dates")}
          style={{
            backgroundColor: Colors.PRIMARY,
            position: "absolute",
            bottom: 57,

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

export default SelectTraveler

const styles = StyleSheet.create({})
