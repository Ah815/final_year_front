import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { VendorContext } from '../../context/VendorContext'
import uidata from '../../constants/uidata'
import FoodTile from '../../components/FoodTile'




const Product = () => {
  const navigation =useNavigation();
  const {vendorObj, setVendorObj} = useContext(VendorContext);
  return (
    <View style={{marginTop:5}}> 
      <FlatList 
      data={uidata.foods}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item)=> item.id}
      numColumns={0}
      scrollEnabled
      renderItem={({item}) =>(
        <View> 
          <FoodTile item={item} showDetails={() =>navigation.navigate('food-nav',item)}/>
        </View>
      )}
      />
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})