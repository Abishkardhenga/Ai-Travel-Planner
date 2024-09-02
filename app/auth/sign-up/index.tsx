import {
  Alert,
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
import Ionicons from "@expo/vector-icons/Ionicons"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "@/configs/firebase.config"
import Toast from "react-native-toast-message"
import { useToast } from "react-native-toast-notifications"

const Signup = () => {
  const router = useRouter()
  const toast = useToast()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const onCreateAccount = () => {
    if (!email && !fullName && !password) {
      alert("enter all the field")
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user
        console.log("user ", user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log("error  ", errorMessage)

        // ..
      })
  }
  return (
    <SafeAreaView>
      <View
        style={{ backgroundColor: Colors.WHITE, height: "100%", padding: 15 }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.PRIMARY,
            fontSize: 30,
            marginTop: 5,
          }}
        >
          Create New Account
        </Text>
        <View style={{ marginTop: 25 }}>
          <Text style={{ fontFamily: "outfit" }}> Full Name </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setFullName(e)}
            value={fullName}
            placeholder="Enter the Full  Name"
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontFamily: "outfit" }}> Email </Text>
          <TextInput
            style={styles.input}
            onChangeText={(e) => setEmail(e)}
            placeholder="Enter the email"
            value={email}
          />
        </View>
        <View style={{ marginTop: 15 }}>
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
          onPress={() => onCreateAccount()}
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
            Create a Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.replace("/auth/sign-in")}
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
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Signup

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
