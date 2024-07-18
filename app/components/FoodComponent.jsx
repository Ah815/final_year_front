import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NetworkImage from './NetworkImage'
import { COLORS , SIZES} from "../constants/theme";

const FoodComponent = ({item, onPress}) => {
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
         <NetworkImage
        data={item.imageUrl[0]}
        width={SIZES.width - 60}
        height={SIZES.height / 5.8}
        radius={16}
        mode={"cover"}
      />
      <Text style={styles.heading}>{item.title}</Text>
      <Text style={styles.small}>{item.time} - delivery time</Text>
      </TouchableOpacity>
  )
}

export default FoodComponent

const styles = StyleSheet.create({
    wrapper: {
        marginRight: 15,
        backgroungColor: COLORS.lightWhite,
        padding: 8,
        borderRadius: 16,
      },
})