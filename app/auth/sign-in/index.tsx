import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import React, { useEffect, useState } from "react"
import { useNavigation, useRouter } from "expo-router"
import { Colors } from "@/constants/Colors"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/configs/firebase.config"

const Signin = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  const onSignin = () => {
    if (!email && !password) {
      alert("enter all the field")
      return
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        console.log("sign in user ", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log("error ", errorCode)
      })
  }
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
            marginTop: 10,
          }}
        >
          Welcome Back
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: Colors.GRAY,
            fontSize: 30,
            marginTop: 10,
          }}
        >
          You've been missed .
        </Text>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "outfit" }}> Email </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
            placeholder="Enter the email"
            value={email}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "outfit" }}> Password </Text>
          <TextInput
            secureTextEntry={true}
            value={password}
            style={styles.input}
            onChangeText={(e) => setPassword(e)}
            placeholder="Enter the Password"
          />
        </View>
        <TouchableOpacity
          onPress={() => onSignin()}
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
