import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

import styles from '../styles'

export default class HomeScreen extends React.Component {

  _onLongPressButton() {
    Alert.alert('Woooo, easy tiger!')
  }

  render() {
    let pic = {
      uri: 'https://cdn.dribbble.com/users/59947/screenshots/2580644/dribble_1x.jpg'
    };
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.headerimagecontainer} />
        <View style={styles.contentcontainer}>
          <Text style={styles.textcontainer}>Welcome to Flower Power</Text>
          <Button
              onPress={() => navigate('Products')}
              onLongPress={this._onLongPressButton}
              title="Purchase flower power!"
            />
        </View>
      </View>   
    );
  }
}

