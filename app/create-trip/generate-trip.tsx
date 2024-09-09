import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { useNavigation } from "expo-router"
import { CreateTripContext } from "@/context/CreateTripContext"
import { Colors } from "@/constants/Colors"
import CustomHeader from "@/components/CustomHeader"
import { AI_PROMPT } from "@/constants/Options"
import { chatSession } from "@/configs/gemini"

const GenerateTrip = () => {
  const navigation = useNavigation()
  const { tripData, setTripData } = useContext(CreateTripContext)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  useEffect(() => {
    tripData && generateAiTrip()
  }, [tripData])
  const generateAiTrip = async () => {
    setLoading(true)
    const location = `${tripData.name}, ${tripData.country}`
    const totalDays = tripData.totalDays
    const totalNight = totalDays - 1
    const traveler = tripData.traveler.title
    const budget = tripData.budget

    const finalPrompt = AI_PROMPT.replace("{location}", location)
      .replace("{totalDays}", totalDays.toString())
      .replace("{totalNights}", totalNight.toString())
      .replace("{traveler}", traveler)
      .replace("{budget}", budget)
      .replace("{totalDays}", totalDays.toString())
      .replace("{totalNights}", totalNight.toString())

    console.log(finalPrompt)

    const result = await chatSession.sendMessage(finalPrompt)
    console.log(result.response.text())
    setLoading(false)
  }

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          padding: 20,
          backgroundColor: Colors.WHITE,
        }}
      >
        <CustomHeader text="" />
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 35,
              paddingTop: 12,
            }}
          >
            Please wait ...
          </Text>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              color: Colors.PRIMARY,
              paddingTop: 12,
            }}
          >
            We are working to generate your trip
          </Text>
          <Image
            style={{
              width: 300,
            }}
            source={require("../../assets/images/loading.gif")}
          />
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 20,
              color: Colors.GRAY,
              paddingTop: 12,
            }}
          >
            Do not Go Back
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default GenerateTrip

const styles = StyleSheet.create({})
