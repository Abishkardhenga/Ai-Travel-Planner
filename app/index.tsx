import { StyleSheet, Text, View } from "react-native"
import React from "react"
import Login from "@/components/Login"
import { ToastProvider } from "react-native-toast-notifications"
import { auth } from "@/configs/firebase.config"
import { Redirect } from "expo-router"

const index = () => {
  const user = auth.currentUser
  return (
    <View style={{ flex: 1 }}>
      {user ? <Redirect href={"/(tabs)/mytrip"} /> : <Login />}
    </View>
  )
}

export default index

const styles = StyleSheet.create({})
