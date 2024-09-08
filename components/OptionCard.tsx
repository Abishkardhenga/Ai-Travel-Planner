import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { travelerType } from "@/constants/Options"
import { Colors } from "@/constants/Colors"

interface OptionCardProps {
  item: travelerType
  selectedOptionCard: travelerType
}

const OptionCard = ({ item, selectedOptionCard }: OptionCardProps) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
          borderRadius: 10,
          backgroundColor: Colors.LIGHT_GRAY,
        },
        selectedOptionCard?.id === item?.id && {
          borderWidth: 3,
        },
      ]}
    >
      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            color: Colors.GRAY,
            fontSize: 17,
            fontFamily: "outfit",
          }}
        >
          {item.description}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 34,
          }}
        >
          {item.icon}
        </Text>
      </View>
    </View>
  )
}

export default OptionCard

const styles = StyleSheet.create({})
