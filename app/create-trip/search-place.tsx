import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native"
import React, { useContext, useEffect, useState } from "react"
import { Colors } from "@/constants/Colors"
import axios from "axios"
import { geocodeKey } from "@/secrets/secrets"
import { CreateTripContext } from "@/context/CreateTripContext"

const SearchPlace = () => {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<Feature[]>([])
  const { tripData, setTripData } = useContext(CreateTripContext)

  const onFetch = async (text: string) => {
    const apiUrl = `https://api.geocode.earth/v1/autocomplete?api_key=${geocodeKey.key}&text=${text}`

    try {
      const response = await axios.get(apiUrl)
      const features = response.data.features

      if (features && features.length > 0) {
        setSuggestions(features)
        console.log("lenght of feature ", suggestions.length)
      }
    } catch (error) {
      console.error("Error fetching suggestions: ", error)
    }
  }

  useEffect(() => {
    console.log("trip data", tripData)
  }, [tripData])

  useEffect(() => {
    if (query.length === 0) {
      setSuggestions([])
      return
    } else if (query.length > 1) {
      onFetch(query)
    }
  }, [query])

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 25,
          paddingTop: 25,
          height: "100%",
          backgroundColor: Colors.WHITE,
        }}
      >
        <Text>Search Place</Text>

        <TextInput
          placeholder="Enter the place"
          value={query}
          onChangeText={(text) => setQuery(text)}
          style={{
            borderColor: Colors.GRAY,
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginBottom: 20,
          }}
        />

        <FlatList
          data={suggestions}
          keyExtractor={(item: Feature, index) => index.toString()}
          renderItem={({ item }) => {
            console.log("item.properties.name", item.properties.name)
            return (
              <TouchableOpacity
                onPress={() =>
                  setTripData({
                    country: item.properties.country,
                    name: item.properties.name,
                    longitude: item.geometry.coordinates[0],
                    latitude: item.geometry.coordinates[1],
                  })
                }
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: Colors.PRIMARY,
                    }}
                  >
                    {item.properties.name} ,
                  </Text>
                  <Text
                    style={{
                      color: Colors.GRAY,
                    }}
                  >
                    {item.properties.country}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchPlace

const styles = StyleSheet.create({})
