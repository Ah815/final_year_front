import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, SHADOWS } from "../constants/theme";

const CategoryItem = ({ category, selected }) => {
  return (
    <View
      style={{
        marginLeft: 0,
        padding: 5,
        alignItem: "center",
        width: 100,
        height: 55,
        justifyContent: "center",
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor:
          category.value == selected ? COLORS.secondary : "transparent",
        shadowColor: SHADOWS.small,
      }}
    >
        <View style={{flexDirection:'column', alignItems:'center'}}>

      <Image
        source={{ uri: category.imageUrl }}
        style={{ width: 30, height: 30 }}
        />
      <Text style={{ fontSize: 13, fontFamily: "regular" }}>
        {category.title}
      </Text>
        </View>
    </View>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({});
