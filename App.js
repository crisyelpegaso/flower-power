import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProductDescriptionScreen from './screens/ProductDescriptionScreen';
import CartScreen from './screens/CartScreen';

const RootNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Products: { screen: ProductsScreen },
  ProductDescription: { screen : ProductDescriptionScreen },
  Cart : {screen : CartScreen }
});

export default RootNavigation;
