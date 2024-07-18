import { StyleSheet, Text, View } from "react-native";
import React, {useContext, useEffect, useState} from "react";
import AssetImage from "./AssetImage";
import { UserReversedGeoCode } from "../context/UserReversedGeoCode";
import { UserLocationContext } from "../context/UserLocationContext";   
import { COLORS, SIZES } from "../constants/theme";
import * as Location from "expo-location";
import { Colors } from "react-native/Libraries/NewAppScreen";

const HomeHeader = () => {
    const [time, setTime] = useState(null);
    const {address, setAddress} = useContext(UserReversedGeoCode)
    const {location, setLocation} = useContext(UserLocationContext)
    // console.log(`this is loication` , location)

useEffect(() => {
    if (location !==null){
        reverseGeoCode(location.coords.latitude, location.coords.longitude )
    }
},[location])

const reverseGeoCode = async (latitude, longitude) => {
    const reverseGeoCodeAddress = await Location.reverseGeocodeAsync({
        longitude:longitude,
        latitude:latitude
    });
    
    setAddress(reverseGeoCodeAddress[0])
    const greeting =getTimeofDay();
    setTime(greeting)
};

const getTimeofDay = () =>{
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 0 && hour < 12) {
return'☀️'
    }else if(hour >= 12<17){
        return'🌤️'
    }else{
        return'🌙'
    }
};



  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.outerStyle}>
        <AssetImage data={require('../../assets/images/profile.jpg')}
        width={55}
        height={55}
        mode={'cover'}
        radius={99}
        />


        <View style={styles.headerStyle}>
            <Text style={styles.heading}>Delivering To</Text>
            <Text style={styles.location}>{`${address.city} ${address.name}`}</Text>
        </View>
      </View>

      <Text style={{fontSize: 36}}>{time}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  outerStyle: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  headerStyle: {
    marginLeft: "15",
    justifyContent:"center"
  }, 
  heading: {
    fontFamily: 'regular',
    fontSize: SIZES.small+2,
    color: COLORS.secondary
  },
  location: {
    fontFamily: 'regular',
    fontSize: SIZES.small+2,
    color: COLORS.gray
  }
});
