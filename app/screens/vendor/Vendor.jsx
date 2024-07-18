import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import VendorsPage from "../../navigation/VendorsPage";
import NetworkImage from "../../components/NetworkImage";
import { COLORS, SIZES } from "../../constants/theme";
import { useRoute } from "@react-navigation/native";
import { RatingInput } from "react-native-stock-star-rating";
import GoogleApiServices from "../../hook/GoogleApiServices";
import { UserLocationContext } from "../../context/UserLocationContext";

const Vendor = ({ navigation }) => {
  const route = useRoute();
  const [distanceTime, setDistanceTime] = useState({});
  const { location, setLocation } = useContext(UserLocationContext);
  const item = route.params;
  console.log(item.coords.latitude,item.coords.longitude)
  // console.log(location.coords.latitude,location.coords.longitude)

  useEffect(() => {
    GoogleApiServices.calculateDistanceAndTime(
      item.coords.latitude,
      item.coords.longitude,
      location.coords.latitude,
      location.coords.longitude
    ).then((result) => {
      if (result) {
        setDistanceTime(result);
      }
    });
    console.log(distanceTime)
  }, []);

  const totalTime= GoogleApiServices.extractNumbers(distanceTime.duration)[0] + GoogleApiServices.extractNumbers(item.time)[0]

  return (
    <View>
      <View>
        <NetworkImage
          data={item.imageUrl}
          height={SIZES.height / 3.4}
          width={SIZES.width}
          radius={20}
        />
        <View style={styles.rating}>
          <View style={styles.innerRating}>
            <RatingInput
              rating={Number(item.rating)}
              size={20}
              // color={COLORS.lightWhite}
            />
            <TouchableOpacity
              style={styles.ratingBtn}
              onPress={() => {
                navigation.navigate("rating");
              }}
            >
              <Text style={styles.btnText} onPress={() => {
                navigation.navigate('rating')
              }}>
                Rate this Store
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 8, marginHorizontal: 8, marginBottom: 10 }}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <View style={{flexDirection: "row", justifyContent:"space-between"}}>
        <Text style={[styles.small,{color:COLORS.gray}]}>{item.title}</Text>
        <Text style={[styles.small,{fontFamily:'regular'}]}>{item.title}</Text>
        </View> */}

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.small, { color: COLORS.gray }]}>Distance</Text>
          <Text style={[styles.small, { fontFamily: "regular" }]}>
          {/* {distanceTime.distance} */}0.1 km
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.small, { color: COLORS.gray }]}>
            Prep and Delivery Time
          </Text>
          <Text style={[styles.small, { fontFamily: "regular" }]}>
            {/* {totalTime} */} 19 min
          </Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={[styles.small, { color: COLORS.gray }]}>Cost</Text>
          <Text style={[styles.small, { fontFamily: "regular" }]}>
            {/* {distanceTime.finalPrice} */} $.90
          </Text>
        </View>
      </View>
      <View style={{ height: 400 }}>
        <VendorsPage />
      </View>
    </View>
  );
};

export default Vendor;

const styles = StyleSheet.create({
  rating: {
    height: 50,
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    backgroundColor: "#00fff53c",
    zIndex: 999,
    bottom: 0,
    borderRadius: 15,
  },
  innerRating: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  ratingBtn: {
    borderColor: COLORS.lightWhite,
    borderWidth: 1,
    borderRadius: 12,
    padding: 6,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.lightBlack,
  },
  title: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.lightBlack,
  },
  small: {
    fontSize: 13,
    fontFamily: "medium",
    color: COLORS.lightBlack,
  },
});
