import React, { Component } from 'react';
import {
	Text, Image, View, TextInput
} from 'react-native';

export default class App extends Component {
	constructor( props ) {
		super( props );
		this.state = { text: '111 2222 333' };
	}

	render() {
		return (
			<View>
				<TextInput style={{ height: 40 }} placeholder="input your phone number..."/>
				<Text style={{ padding: 10, backgroundColor: 'red' }}>
					{this.state.text.split( ' ' ).map( ( word ) => word ).join( '' )}
				</Text>
			</View>
		);
	}
}

