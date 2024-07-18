import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useContext } from "react";
import { COLORS, SIZES } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import pages from "./page.style";
import uidata from "../constants/uidata";
import { UserReversedGeoCode } from "../context/UserReversedGeoCode";
import { UserLocationContext } from "../context/UserLocationContext";
import HomeHeader from "../components/HomeHeader";
import CategoryList from "../components/CategoryList";
import ChoicesList from "../components/ChoicesList";
import Heading from "../components/Heading";
import NearByVendors from "../components/NearByVendors";
import Divider from "../components/Divider";
import NewFoodList from "../components/NewFoodList";
import FastestNearYou from "../components/FastestNearYou";
import HomeCategories from "../components/HomeCategories";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  // console.log(selectedChoice)

  // const { address, setAddress } = useContext(UserReversedGeoCode);
  // const { location, setLocation } = useContext(UserLocationContext);
  // console.log(location);

  return (
    <SafeAreaView>
      <View style={pages.viewOne}>
        <View style={pages.viewTwo}>
          <HomeHeader />
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ borderBottomEndRadius: 30, borderBottomStartRadius: 30 }}
          >
            <CategoryList
              setSelectedCategory={setSelectedCategory}
              setSelectedSlection={setSelectedSection}
              setSelectedValue={setSelectedValue}
            />
            <ChoicesList
              setSelectedChoice={setSelectedChoice}
              setSelectedSlection={setSelectedSection}
            />
            {selectedCategory !== null && selectedSection !== null ? (
              <View>
                <Heading heading={`Browse${selectedValue}`} onPress={() => {}} />


                <HomeCategories />
              </View>
            ) : (
              <View>
                <Heading heading={"Nearby vendors"} onPress={() => {}} />
                <NearByVendors />
                <Divider /> 
                <Heading heading={"Try a new vendors"} onPress={() => {}} />
                <NewFoodList />

                <Divider />
                <Heading heading={"Vendor nearest to you"} onPress={() => {}} />
                <FastestNearYou />
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
