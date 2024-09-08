import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { useNavigation } from "expo-router"
import { Colors } from "@/constants/Colors"
import CalendarPicker from "react-native-calendar-picker"
import CustomHeader from "@/components/CustomHeader"
import moment, { Moment } from "moment"
import { CreateTripContext } from "@/context/CreateTripContext"

const SelectDates = () => {
  const [startDate, setStartDate] = useState<Moment | null>(null)
  const [endDate, setEndDate] = useState<Moment | null>(null)
  const navigation = useNavigation()
  const { tripData, setTripData } = useContext(CreateTripContext)

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const onDateChange = (date: any, type: any) => {
    if (type === "START_DATE") {
      setStartDate(moment(date))
    } else if (type === "END_DATE") {
      setEndDate(moment(date))
    }
  }

  const OnDateSelectionContinue = () => {
    if (!startDate && !endDate) {
      alert("Please enter the end date and start date")
      return
    }
    const totalDays = endDate?.diff(startDate, "days")

    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalDays: totalDays! + 1,
    })
  }

  return (
    <SafeAreaView>
      <View
        style={{
          height: "100%",
          backgroundColor: Colors.WHITE,
          padding: 20,
        }}
      >
        <CustomHeader text="" />
        <Text
          style={{
            fontSize: 35,
            padding: 15,
            fontFamily: "outfit-bold",
          }}
        >
          Travel Dates
        </Text>
        <View
          style={{
            marginTop: 15,
          }}
        >
          <CalendarPicker
            allowRangeSelection={true}
            minDate={new Date()}
            maxRangeDuration={7}
            selectedDayTextStyle={{
              color: Colors.WHITE,
            }}
            selectedRangeStyle={{
              backgroundColor: Colors.PRIMARY,
            }}
            onDateChange={onDateChange}
          />
        </View>
        <TouchableOpacity
          onPress={OnDateSelectionContinue}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            width: "100%",
            borderRadius: 18,
            marginTop: 15,
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

export default SelectDates

const styles = StyleSheet.create({})
