import { CreateTripContext } from "@/context/CreateTripContext"
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native"
import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect, useState } from "react"
import "react-native-reanimated"

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  })
  const [tripData, setTripData] = useState<any>(null)
  return (
    <CreateTripContext.Provider
      value={{
        tripData,
        setTripData,
      }}
    >
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="create-trip/search-place"
          options={{
            headerShown: false,
            headerTransparent: true,
            headerTitle: "Search",
          }}
        />
        <Stack.Screen
          name="create-trip/select-traveler"
          options={{
            headerShown: false,
            headerTransparent: true,
            headerTitle: "Search",
          }}
        />
      </Stack>
    </CreateTripContext.Provider>
  )
}
