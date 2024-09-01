import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import onboardinImg from "@/assets/images/onboardingImg.webp"
import { Colors } from "@/constants/Colors"
import { useRouter } from "expo-router"

const Login = () => {
  const router = useRouter()
  return (
    <View>
      <Image source={onboardinImg} style={{ width: "100%", height: 450 }} />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
          }}
        >
          AI Travel Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 3,
          }}
        >
          Discover your Next travel plan efficiently and effortlessly .
          Personalize your travelling with Ai travel planner. Travel Smartly
          with Ai driven Insights.
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/auth/sign-in")}
          style={styles.button}
        >
          <Text
            style={{
              color: Colors.WHITE,
              textAlign: "center",
              fontFamily: "outfit",
              fontSize: 19,
            }}
          >
            Sign In with google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "7%",
  },
})
