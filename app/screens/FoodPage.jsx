import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  TouchableOpacity,
  FlatList,
  TextInput,
} from "react-native";
import React, { useContext, useState, useCallback, useEffect } from "react";
import { CartCountContext } from "../context/CartCountContext";
import { COLORS, SIZES } from "../constants/theme";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Counter from "../components/Counter";
import { AntDesign } from "@expo/vector-icons";

const FoodPage = ({ route, navigation }) => {
  const item = route.params.item;
  console.log(`ye mera item`, item)
  const [isChecked, setIsChecked] = useState(false);
  const [additives, setAdditives] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [restaurant, setRestaurant] = useState(1);
  const [count, setCount] = useState(1);
  const [prefrence, setPrefrence] = useState("");
  //   const { cartCount, setCartCount } = useContext(CartCountContext);
  //   console.log(additives)
  let sendToOrderPage;
  const id = item.vendors

  const handleAdditives = (newAdditive) => {
    setAdditives((prevAdditives) => {
      const exists = prevAdditives.some(
        (additive) => additive.id === newAdditive.id
      );
      if (exists) {
        return prevAdditives.filter(
          (additive) => additive.id !== newAdditive.id
        );
      } else {
        return [...prevAdditives, newAdditive];
      }
    });
  };

  const handlePress = (item) => {
    const cartItem = {
      productId: item._id,
      additives: additives,
      quantity: count,
      totalPrice: (item.price + totalPrice) * count,
    };
    addToCart(cartItem);
  };

  sendToOrderPage = {
    orderItem: {
      foodId: item._id,
      additives: additives,
      quantity: count,
      price: (item.price + totalPrice) * count,
      instruction: prefrence
    },
    title: item.title,
    description: item.description,
    imageUrl: item.imageUrl[0],
    vendors: id,
  };

  const addToCart = async (cartItem) => {};

  useEffect(() => {
    calculatePrice();
  }, [additives]);

  const calculatePrice = () => {
    const total = additives.reduce((sum, additives) => {
      return sum + parseFloat(additives.price);
    }, 0);
    setTotalPrice(total);
    // console.log(total)
  };

  return (
    <View style={{ backgroundColor: COLORS.lightWeight, height: SIZES.height }}>
      <View>
        <Image
          source={{ uri: item.imageUrl[0] }}
          style={{
            width: SIZES.width,
            height: SIZES.height / 4,
            borderBottomRightRadius: 30,
            borderBottomLeftRadius: 30,
          }}
        />
        <TouchableOpacity
          onPress={() => {}}
          style={{ position: "absolute", bottom: 30, right: 0 }}
        >
          <View style={styles.vedBtn}>
            <Text style={{ color: COLORS.black, fontFamily: "bold" }}>
              Open the Store
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.foodPage}>{item.title}</Text>
          <Text style={[styles.foodPage, { color: COLORS.primary }]}>
            ${(item.price + totalPrice) * count}
          </Text>
        </View>
        <Text style={styles.small}>{item.description}</Text>
        <FlatList
          data={item.foodTags}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item}
          //   style={{ marginTop: 8 }}
          horizontal
          scrollEnabled
          renderItem={({ item }) => (
            <View style={styles.tags}>
              <Text style={{ paddingHorizontal: 4, color: COLORS.lightWhite }}>
                {item}
              </Text>
            </View>
          )}
        />

        <Text style={[styles.foodPage, { marginBottom: 5, marginTop: 10 }]}>
          Quantity Ratio
        </Text>
        <FlatList
          data={item.additives}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          //   style={{ marginTop: 8 }}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                // marginBottom: 10,
              }}
            >
              <BouncyCheckbox
                size={20}
                unfillColor="#FFFFFF"
                fillColor={COLORS.primary}
                innerIconStyle={{ borderWidth: 1 }}
                textStyle={styles.small}
                text={item.title}
                onPress={() => {
                  handleAdditives(item);
                }}
              />
              <Text style={styles.small}>${item.price}</Text>
            </View>
          )}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <Text style={[styles.foodPage, { marginBottom: 1 }]}>Quantity</Text>
          <Counter count={count} setCount={setCount} />
        </View>
        <Text style={[styles.foodPage, { marginBottom: 1, marginTop: 1 }]}>
          Prefrences
        </Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Add sepecific instructions"
            value={prefrence}
            onChangeText={(value) => setPrefrence(value)}
            autoCapitalize={"none"}
            autoCorrect={false}
            style={{ flex: 1 }}
          />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View style={styles.suspended}>
          <View style={styles.cart}>
            <View style={styles.cartRow}>
              <TouchableOpacity onPress={() => {}} style={styles.cartbtn}>
                <AntDesign
                  name="pluscircleo"
                  size={24}
                  color={COLORS.lightWhite}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("order-page", sendToOrderPage)
                }
                style={{
                  backgroundColor: COLORS.primary,
                  paddingHorizontal: 80,
                  borderRadius: 30,
                }}
              >
                <Text
                  style={[
                    styles.foodPage,
                    { color: COLORS.lightWhite, alignItems: "center" },
                  ]}
                >
                  order
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {}} style={styles.cartbtn}>
                <Text
                  style={[
                    styles.foodPage,
                    { color: COLORS.lightWhite, alignItems: "center" },
                  ]}
                >
                  {0}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FoodPage;

const styles = StyleSheet.create({
  vedBtn: {
    borderColor: COLORS.tertiary,
    // backgroundColor: COLORS.gray2,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
  },
  container: {
    marginHorizontal: 12,
    marginTop: 10,
  },
  foodPage: {
    fontSize: 22,
    fontFamily: "medium",
    color: COLORS.black,
  },
  small: {
    fontSize: 13,
    fontFamily: "regular",
    color: COLORS.gray,
    textAlign: "justify",
  },
  tags: {
    right: 10,
    marginHorizontal: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 8,
  },
  input: {
    borderColor: COLORS.primary1,
    borderWidth: 1,
    backgroundColor: COLORS.offwhite,
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    alginItems: "center",
  },
  suspended: {
    position: "absolute",
    bottom: 50,
    width: "100",
    alignItems: "center",
  },
  cart: {
    width: SIZES.width - 24,
    height: 60,
    marginHorizontal: "20",
    justifyContent: "center",
  },
  cartRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 12,
  },
  cartbtn: {
    width: 40,
    height: 40,
    borderRadius: 99,
    justifyContent: "center",
    backgroundColor: COLORS.primary,
    alignItem: "center",
    marginLeft: 7,
  },
});
