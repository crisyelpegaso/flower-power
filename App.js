import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import ProductsScreen from './screens/ProductsScreen';

import styles from './styles'

const RootNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Products: { screen: ProductsScreen }
});

export default RootNavigation;
