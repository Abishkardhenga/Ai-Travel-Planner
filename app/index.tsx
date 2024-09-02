import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Login from "@/components/Login"
import { ToastProvider } from "react-native-toast-notifications"

const index = () => {
  return (
    <View style={{ flex: 1 }}>
      <Login />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
