import React from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default class HeaderImage extends React.Component {
  _onPressButton() {
    Alert.alert('Nice! Trying to purchase flowers?')
  }

  _onLongPressButton() {
    Alert.alert('Woooo, easy tiger!')
  }

  render() {
    let pic = {
      uri: 'https://cdn.dribbble.com/users/59947/screenshots/2580644/dribble_1x.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={pic} style={styles.headerimagecontainer} />
        <View style={styles.contentcontainer}>
          <Text style={styles.textcontainer}>Welcome to Flower Power</Text>
          <Button
              onPress={this._onPressButton}
              onLongPress={this._onLongPressButton}
              title="Purchase flower power!"
            />
        </View>
      </View>   
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'center'
  },
  headerimagecontainer: {
    flex: 3
  },
  contentcontainer: {
    flex: 1
  },
  textcontainer: {
    flex: 1,
    backgroundColor: 'yellow',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold'
    // TODO : fixme
    // fontFamily: 'San Francisco'
  }
});
