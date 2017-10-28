import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

import styles from '../styles'

export default class ProductsScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title='Mary Jane'
        onPress={() => navigate('HomeScreen', { name: 'Jane' })}
      />
    );
  }
}
