import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native"
import Search from "./search";

export default function Layout(){
  return(
    <Tabs screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        position: "absolute",
        bottom: 27,
        left: 16,
        right: 16,
        height: 72,
        elevation: 0,
        backgroundColor: "white",
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems:"center",
              paddingTop: 10
            }}>
              <Ionicons
              name={focused ? "home" : "home-outline"}
              color={focused ? "#04bbec" : "gray"}
              size={24}
              />
              <Text style={{
                color: focused? "#04bbec" :"gray",
                fontSize: 10,
                marginTop:4
              }}>Inicio!</Text>
            </View>
          )
        }
        }
      />

  <Tabs.Screen
        name="add"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems: "center",
              justifyContent: "center",
              height: 76,
              width: 76,
              borderRadius: 999,
              backgroundColor: "#04bbec",
              marginBottom: 26
            }}>
              <Ionicons
              name="add"
              color="white"
              size={24}
              />
              <Text style={{
                color: focused? "#04bbec" :"gray",
                fontSize: 9,
                marginTop:4
              }}>Añadir!</Text>
            </View>
          )
        }
        }
      />

<Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              alignItems:"center",
              paddingTop: 10
            }}>
              <Ionicons
              name="search"
              color={focused ? "#04bbec" : "gray"}
              size={24}
              />
              <Text style={{
                color: focused? "#04bbec" :"gray",
                fontSize: 9,
                marginTop:4
              }}>Buscar</Text>
            </View>
          )
        }
        }
      />
    </Tabs>
  )
}