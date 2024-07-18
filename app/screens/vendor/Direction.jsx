import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { VendorContext } from '../../context/VendorContext'
import GoogleMapView from '../../components/GoogleMapView'

const Direction = () => {
  const {vendorObj, setVendorObj} = useContext(VendorContext)
  const coords = vendorObj.coords;
  return (
    <View>
      <GoogleMapView placeList={[coords]}/>
    </View>
  )
}

export default Direction

const styles = StyleSheet.create({})