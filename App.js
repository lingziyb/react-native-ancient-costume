import React, { Component } from 'react';
import {
	Text, Image, View
} from 'react-native';

class Greeting extends Component {
	constructor( props ) {
		super( props );
		this.state = { showText: true };

		setInterval( () => {
			this.setState( pre => {
				return { showText: !pre.showText };
			} )
		}, 1000 )
	}

	render() {
		let display = this.state.showText ? this.props.text : '';
		return (
			<Text>{display}999</Text>
		);
	}
}

export default class App extends Component {
	render() {
		return (
			<View>
				<Greeting text='lingli888'></Greeting>
				<Greeting text='zhao'></Greeting>
			</View>
		);
	}
}
