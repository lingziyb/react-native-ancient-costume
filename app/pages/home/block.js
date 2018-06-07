import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image, TouchableHighlight} from 'react-native';

export default class Block extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<TouchableHighlight onPress={this.enterDetail.bind(this, this.props.item.url)}>
				<View style={styles.item}>
					<View style={styles.itemImgs}>
						{
							this.props.item.imgs.map((img, index) => {
								if (index > 2) return;
								return (
									<Image key={index} source={{uri: img}} style={styles.img}/>
								)
							})
						}
					</View>
					<Text style={styles.name} numberOfLines={2}>{this.props.item.title}</Text>
					<Text style={styles.info} numberOfLines={2}>{this.props.item.info.replace(/\s/g, "") }</Text>
				</View>
			</TouchableHighlight>
		)
	}

	enterDetail(url) {
		this.props.navigation.navigate('HomeDetail', {url: url});
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
	info: {
		marginTop: 2,
	}
});
