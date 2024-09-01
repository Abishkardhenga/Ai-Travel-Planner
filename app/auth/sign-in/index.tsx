import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect } from "react"
import { useNavigation, useRouter } from "expo-router"
import { Colors } from "@/constants/Colors"

const Signin = () => {
  const router = useRouter()
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: Colors.WHITE, height: "100%", padding: 15 }}
      >
        <Text style={{ fontFamily: "outfit-bold", fontSize: 30 }}>
          Let's Sign You in
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 30,
            color: Colors.GRAY,
            marginTop: 20,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GRAY,
            fontSize: 30,
            marginTop: 20,
          }}
        >
          You've been missed .
        </Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "outfit" }}> Email </Text>
          <TextInput style={styles.input} placeholder="Enter the email" />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "outfit" }}> Password </Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Enter the Password"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            borderRadius: 12,
            padding: 15,
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 18,
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/auth/sign-up")}
          style={{
            backgroundColor: Colors.WHITE,
            borderRadius: 12,
            padding: 15,
            marginTop: 15,
            borderWidth: 1,
          }}
        >
          <Text
            style={{
              color: Colors.PRIMARY,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 18,
            }}
          >
            Create a Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Signin

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: Colors.GRAY,
    fontFamily: "outfit",
    marginTop: 10,
  },
})
