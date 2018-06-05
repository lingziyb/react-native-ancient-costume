import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableHighlight} from 'react-native';

export default class Block extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableHighlight onPress={this.enterDetail.bind(this)}>
				<View style={styles.item}>
					<View style={styles.itemImgs}>
						<Image style={styles.img} source={{uri: this.props.item.img}}/>
						<Image style={styles.img} source={{uri: this.props.item.img1}}/>
						<Image style={styles.img} source={{uri: this.props.item.img2}}/>
					</View>
					<Text style={styles.name}>{this.props.item.title}</Text>
					<Text style={styles.text}>{this.props.item.info}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	enterDetail() {
		this.props.navigation.navigate('HomeDetail');
	}
}

const styles = StyleSheet.create({
	item: {
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomColor: '#eeeeee',
		borderBottomWidth: 1,
		backgroundColor: '#ffffff'
	},
	itemImgs: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'

	},
	img: {
		width: 100,
		height: 100,
	},
	name: {
		marginTop: 8,
		fontSize: 18,
		color: '#333333'
	},
	text: {
		marginTop: 2
	}
});
