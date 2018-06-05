import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList, Image
} from 'react-native';
class Block extends Component {
	constructor(props) {
		console.log(props);
		super(props);
		this.state = {
			img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527866045137&di=ae40862ec87a5b15322f6a6525d5b8c7&imgtype=0&src=http%3A%2F%2Fupload.taihainet.com%2Fnews%2FUploadFiles_6334%2F201508%2F20150811224441669.jpg',
			img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
			img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg'
		};
	}

	render() {
		return (
			<View style={styles.item}>
				<View style={styles.itemImgs}>
					<Image style={styles.img} source={{uri: this.state.img}}/>
					<Image style={styles.img} source={{uri: this.state.img1}}/>
					<Image style={styles.img} source={{uri: this.state.img2}}/>
				</View>
				<Text>骑着马穿越草原</Text>
				<Text>白桦林，积雪，湖泊---带你穿过森林，宛如梦境。。</Text>
			</View>
		)
	}
}

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{key: 'lingli'},
				{key: 'jj'},
				{key: 'hh'},
				{key: 'pp'},
				{key: '12'},
				{key: 'qw'},
				{key: 'e'},
				{key: 'asd'},
				{key: 'xc'},
				{key: 'fdg'},
				{key: 'ert'},
				{key: 'vbn'},
			]
		};
	}

	render() {
		return (
			<View style={styles.home}>
				<Text style={styles.title} onPress={this._onPress.bind(this)}>welcome to lingli home</Text>
				<FlatList data={this.state.list}
						  renderItem={ ({item}) => <Block></Block> }/>

				{/*{item.key}*/}
			</View>
		);
	}

	_onPress() {
		this.props.navigation.navigate('Find');
	}
}

const styles = StyleSheet.create({
	home: {
		backgroundColor: '#ffffff',
		paddingBottom: 60
	},
	title: {
		padding: 10,
		fontSize: 20,
		borderBottomWidth: 1,
		borderColor: '#dddddd',
		borderStyle: 'dotted',
	},
	item: {
		margin: 10,
	},
	itemImgs: {
		flexDirection: 'row',
	},
	img: {
		margin: 2,
		flex: 1,
		height: 100,
	}
});
