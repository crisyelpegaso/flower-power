import React, { Component } from 'react';
import { Image } from 'react-native';

export class FlowerHeaderImage extends React.Component {
	render() {
	    return (
	      <Image source='https://cdn.dribbble.com/users/59947/screenshots/2580644/dribble_1x.jpg' 
	      style={{width: 193, height: 110}}/>
	    );
  	}
}