import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { router, useNavigation } from "expo-router"
import CustomHeader from "@/components/CustomHeader"
import { Colors } from "@/constants/Colors"
import { SelectBudgetOptions, travelerType } from "@/constants/Options"
import OptionCard from "@/components/OptionCard"
import { CreateTripContext } from "@/context/CreateTripContext"

const SelectBudget = () => {
  const [selectedOption, setSelectedOption] = useState<travelerType>()
  const { tripData, setTripData } = useContext(CreateTripContext)

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    setTripData({
      ...tripData,
      budget: selectedOption?.title,
    })
    console.log("budget trip data", tripData)
  }, [selectedOption])
  const OnContinue = () => {
    if (!selectedOption) {
      alert("Please select any budget")
    } else {
      router.push("/")
    }
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
          Select Budget
        </Text>
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: Colors.GRAY,
            paddingTop: 12,
          }}
        >
          Choose Spending Habits for Your Trip
        </Text>
        <FlatList
          data={SelectBudgetOptions}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ marginVertical: 10 }}
              onPress={() => setSelectedOption(item)}
            >
              <OptionCard item={item} selectedOptionCard={selectedOption!} />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity
          onPress={OnContinue}
          style={{
            backgroundColor: Colors.PRIMARY,
            position: "absolute",
            bottom: 147,
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

export default SelectBudget

const styles = StyleSheet.create({})
