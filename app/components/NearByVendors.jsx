import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import uidata from "../constants/uidata";
import StoreComponent from "./StoreComponent";
import { useNavigation } from "@react-navigation/native";
import { VendorContext } from "../context/VendorContext";


const NearByVendors = () => {
  const navigation = useNavigation();
  const {vendorObj, setVendorObj} = useContext(VendorContext)


  return (
    <View style={{ marginLeft: 12 }}>
      <FlatList
        data={uidata.vendors}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5, rowGap: 10 }}
        scrollEnabled
        renderItem={({ item }) => (
          <StoreComponent item={item} onPress={() => {navigation.navigate('vendor', item), setVendorObj(item)}} />
        )}
      />
    </View>
  );
};

export default NearByVendors;

const styles = StyleSheet.create({});
