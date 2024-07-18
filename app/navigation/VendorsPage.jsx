import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Product from '../screens/vendor/Product';
// import NewProduct  from '../screens/vendor/NewProduct ';
import Direction from '../screens/vendor/Direction';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab6' }} />
  );

const renderScene = SceneMap({
  first: Product,
  second: Direction,
  // third: NewProduct 
});

const VendorsPage= ()=> {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Products' },
    { key: 'second', title: 'Direction' },
    // { key: 'third', title: 'New' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}


export default VendorsPage