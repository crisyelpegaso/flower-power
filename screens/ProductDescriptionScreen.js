import React from 'react';
import { Alert, Text, Button, Image, Picker, View } from 'react-native';

import styles from '../styles/ProductDescriptionStyles'

export default class ProductDescriptionScreen extends React.Component {
	static navigationOptions = {
    	title: 'Product Description'
	};

	render() {
		const { state } = this.props.navigation;
		const { item } = this.props.navigation.state.params;
		const { quantity } = this.props.navigation.state;
		// .user.name
		return(
			<View>
				<Image source={{uri: item.picUrl}} style={styles.productImge}/>
				<Text style={styles.productTitle}>{item.name}</Text>
				<Picker selectedValue={quantity}
				// Picker crashing
  					onValueChange={(itemValue, itemIndex) => this.setState({quantity: itemValue})}>
  					<Picker.Item label="1" value="1" />
  					<Picker.Item label="2" value="2" />
				</Picker>
				<Button style={styles.addToCartButton} title='Add To Cart' onPress={() => this._addToCart(item, this.state.quantity)}/>
 			</View>
		);
	}

	_addToCart(item, quantity){
		Alert.alert("Added to cart : " + item.name + ", " + quantity);
		// Should pop this screen!
	}
}

