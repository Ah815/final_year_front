import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";
import BottomTab from "./app/navigation/BottomTab";
import { UserLocationContext } from "./app/context/UserLocationContext";
import { LoginContext } from "./app/context/LoginContext";
import { UserReversedGeoCode } from "./app/context/UserReversedGeoCode";
import { VendorContext } from "./app/context/VendorContext";
import FoodNavigator from "./app/navigation/FoodNavigator";
import VendorsPage from "./app/navigation/VendorsPage";
import Vendor from "./app/screens/vendor/Vendor";
import AddRating from "./app/screens/AddRating";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SignUp from "./app/screens/SignUp";
import { CartCountContext } from "./app/context/CartCountContext";
// import Vendor from "./app/screens/vendor/Vendor";

const Stack = createNativeStackNavigator();
export default function App() {
  const [location, setLocation] = useState(null);
  const [login, setLogin] = useState(false);
  const [address, setAddress] = useState(null);
  const [cartCount , setCartCount] = useState(0);
  const [vendorObj, setVendorObj] = useState(null);
  const [error, setErrorMsg] = useState(null);
  const defaultAddress = {
    city: "Shanghai",
    country: "China",
    district: "Pudong",
    isoCountryCode: "CN",
    name: "33 East Nanjing Rd",
    postalCode: "94108",
    region: "SH",
    street: "Stockton St",
    streetNumber: "1",
    subregion: "San Francisco County",
    timezone: "America/Los_Angeles",
  };
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    (async () => {
      setAddress(defaultAddress);
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location is required!");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      loginStatus();
      // console.log('app ki lication',location)
    })();
  }, []);

  if (!fontsLoaded) {
    // Return a loading indicator or splash screen while fonts are loading or app is initializing
    return;
  }

  const loginStatus = async () => {
    const userToken = await AsyncStorage.getItem("token");

    if (userToken !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
    // console.log(login);
  };

  return (
    <UserLocationContext.Provider value={{ location, setLocation }}>
      <UserReversedGeoCode.Provider value={{ address, setAddress }}>
        <VendorContext.Provider value={{ vendorObj, setVendorObj }}>
        <LoginContext.Provider value={{ login , setLogin }}>
        <CartCountContext.Provider value={{ cartCount , setCartCount }}>

       

          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="bottom-navigation"
                component={BottomTab}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="food-nav"
                component={FoodNavigator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="vendors-page"
                component={VendorsPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="vendor"
                component={Vendor}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="signUp"
                component={SignUp}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="rating"
                component={AddRating}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
          </CartCountContext.Provider>
          </LoginContext.Provider>
        </VendorContext.Provider>
      </UserReversedGeoCode.Provider>
    </UserLocationContext.Provider>
  );
}
