import {
  ScrollView,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import uidata from "../constants/uidata";
import React, { useState } from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({
  setSelectedCategory,
  setSelectedSlection,
  setSelectedValue,
}) => {
  const [selected, setSelected] = useState(null);
  const categories = [1, 2, 3, 4, 5];

  const handelSelectedCategory = (item) => {
    if (selected == item.value) {
      setSelectedCategory(null);
      setSelected(null);
      setSelectedSlection(null);
      setSelectedValue(null);
    } else {
      setSelectedCategory(item._id);
      setSelected(item.value);
      setSelectedSlection("category");
      setSelectedValue(item.title);
    }
  };

  return (
    <FlatList
      data={uidata.categories}
      showsHorizontalScrollIndicator={false}
      horizontal
      style={{ marginTop: 8 }}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={()=> handelSelectedCategory(item)}>
          <CategoryItem selected={selected} category={item} />
        </TouchableOpacity>
      )}
    />
  );
};

export default CategoryList;

const styles = StyleSheet.create({});
