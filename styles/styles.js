import React from 'react';
import { StyleSheet } from 'react-native';

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
  },
  productContainer : {
    flex : 1
  },
  productImage : {
    width : 60,
    height : 60
  },
  productDescription : {
    width : 60,
    height : 60 
  }
});

export default styles;