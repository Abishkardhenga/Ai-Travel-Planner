import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { Tabs } from "expo-router"
import Entypo from "@expo/vector-icons/Entypo"
import { Colors } from "@/constants/Colors"
import Fontisto from "@expo/vector-icons/Fontisto"
import Ionicons from "@expo/vector-icons/Ionicons"

const _layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.PRIMARY }}>
      <Tabs.Screen
        name="mytrip"
        options={{
          tabBarLabel: "My Trip",
          tabBarIcon: ({ color }) => (
            <Entypo name="location-pin" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarLabel: "Discover",
          tabBarIcon: ({ color }) => (
            <Fontisto name="world" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})
