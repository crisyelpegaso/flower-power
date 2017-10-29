import React from 'react';
import { Text } from 'react-native';

export default class ProductDescriptionScreen extends React.Component {
	static navigationOptions = {
    	title: 'Product Description',
	};

	render() {
		const { state } = this.props.navigation;
		const { itemName } = this.props.navigation.state.params;
		return(
 			<Text>{itemName}</Text>
		);
	}
}