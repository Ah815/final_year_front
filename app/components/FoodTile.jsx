import { StyleSheet, Text, View, FlatList, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS } from "../constants/theme";
import NetworkImage from "./NetworkImage";
import { RatingInput } from "react-native-stock-star-rating";

const FoodTile = ({ item, onPress, showDetails }) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={showDetails}>
      <View style={{ backgroungColor: COLORS.lightWhite, borderRadius: 12 }}>
        <View style={{ flexDirection: "row" }}>
          <NetworkImage
            data={item.imageUrl[0]}
            height={75}
            width={75}
            radius={15}
          />

          <View>
            <Text style={{position: "absolute" , left:230 ,backgroundColor:COLORS.primary, borderRadius:7, top:5}}>
                <Text style={[styles.small,{color:COLORS.lightWhite, marginHorizontal:5}]}>${item.price}</Text>
            </Text>
          </View>
          <View style={{ marginLeft: 10, marginTop: 5 }}>
            <Text style={styles.title}>{item.title}</Text>
            {/* <RatingInput 
        rating={Number(item.rating)}
        size={20}
        color={COLORS.primary}
        /> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FoodTile;

const styles = StyleSheet.create({
  wrapper: {
    left: 5,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    marginRight: 10,
    paddingRight: 7,
    ...SHADOWS.small
  },
  title: {
    fontSize: 16,
    fontFamily: "medium",
    color: COLORS.black,
  },
  small: {
    fontSize: 13,
    fontFamily: "medium",
    color: COLORS.black,
  },
});
