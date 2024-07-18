import { FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import React, { useState } from "react";
import uidata from "../constants/uidata";
import { COLORS } from "../constants/theme";

const ChoicesList = ({setSelectedChoice, setSelectedSlection}) => {
  const [selected, setSelected] = useState(null);

  const handelPress = (item) =>{
    if(selected === item.value) {
      setSelected(null)
      setSelectedChoice(null)
      setSelectedSlection(null)
    } else{
      setSelected(item.value)
      setSelectedChoice(item.value)
      setSelectedSlection("vendors")
    }
  }
  return (
    <View>
      <Text
        style={{
          margin: 16,
          marginVertical: 8,
          fontSize: 18,
          fontFamily: "bold",
        }}
      >
        Pick Vendor
      </Text>

      <FlatList
        data={uidata.choicesList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        scrollEnabled
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() =>handelPress(item)}
            style={{
              backgroundColor:
              selected === item.value ? COLORS.secondary : COLORS.lightWhite,
              height: 40,
              borderRadius: 12,
              marginHorizantal: 8,
              justifyContent: "center"
            }}
          >
            <Text 
            style={{marginHorizontal:10,
            fontFamily:"regular",
            fontSize:13,
            color: item.value === selected ? COLORS.lightWhite: COLORS.gray
          }}
            >{item.name}</Text>
          </TouchableOpacity>
          
          
        )}
      />
    </View>
  );
};

export default ChoicesList;

const styles = StyleSheet.create({});
