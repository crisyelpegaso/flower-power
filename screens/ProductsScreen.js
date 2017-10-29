import React from 'react';
import { Alert, Button, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import styles from '../styles/styles'

const products = [
	{name: 'Roses' , picUrl: 'https://i.pinimg.com/736x/fc/95/88/fc95887d0b1ab9f8d12fc468d1ff861e--rose-jewelry-rose-tattoos.jpg'},
	{name: 'Lilas', picUrl: 'https://www.dondevive.org/wp-content/uploads/2016/03/lila.jpg'},
    {name: 'Daisy', picUrl: 'https://i.pinimg.com/736x/35/63/cc/3563ccf3fb0ee7de471f33394b6e6d95--daisy-flowers-pretty-flowers.jpg'}
];

export default class ProductsScreen extends React.Component {

  static navigationOptions = {
    title: 'Products',
  };
  render() {
    return (
    	<FlatList data={products} renderItem={ 
    	 	({item}) => <ProductRow name={item.name} pic={item.picUrl} onClick={() => this._displayProductDescription(item)}/>
    	}/>
    );
  }

  _displayProductDescription(item) {
  	const { navigate } = this.props.navigation;
  	navigate('ProductDescription', {itemName : item.name});
  }

}

class ProductRow extends React.Component {
  static propTypes = {
  	name: React.PropTypes.string.isRequired,
  	pic : React.PropTypes.string.isRequired,
  	onClick : React.PropTypes.func
  }

  render() {
  	const { name, pic, onClick } = this.props;
	return (
		<View style={{flexDirection: 'row'}}> 
			<Image source={{uri: this.props.pic}} style={styles.productImage}/>
			<Button onPress={ this.props.onClick } title={this.props.name}/>
		</View>        
	);
  }
}