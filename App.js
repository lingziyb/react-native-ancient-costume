import React, { Component } from 'react';
import {
	Text, Image, View, StyleSheet
} from 'react-native';

class Greeting extends Component {
	constructor( props ) {
		super( props );
		this.state = { showText: true };

		setInterval( () => {
			this.setState( pre => {
				return { showText: !pre.showText };
			} )
		}, 3000 );
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
			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={{ width: 50, backgroundColor: 'red' }} text='red lingli888'></View>
				<Greeting style={{ width: 50, backgroundColor: 'blue' }} text='blue zhao'></Greeting>
				<Text style={{ width: 50, backgroundColor: 'green' }}>12356789</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create( {
	red: {
		color: 'red'
	},
	blue: {
		color: 'blue'
	}
} );
