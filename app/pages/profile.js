import React, {Component} from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image
} from 'react-native';

export default class MinePage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.profile}>
				<Image style={styles.img}
					   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528266580740&di=2a3b5925ada56397521c2cdaa02e6a1f&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201509%2F10%2F20150910104633_XBShw.jpeg'}}/>
				<View style={styles.info}>
					<View style={styles.user}>
						<Image style={styles.head}
							   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528266580740&di=2a3b5925ada56397521c2cdaa02e6a1f&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201509%2F10%2F20150910104633_XBShw.jpeg'}}/>
						<View style={styles.userRight}>
							<Text style={styles.name}>00婕</Text>
							<Text style={styles.describe}>想做什么就去做，不要怕失败。去做比一切都重要，做了就是胜利。</Text>
						</View>
					</View>
					<View style={styles.list}>
						<View style={styles.row}>
							<Text>我的发表</Text>
							<Text> > </Text>
						</View>
						<View style={styles.row}>
							<Text>我的收藏</Text>
							<Text> > </Text>
						</View>
						<View style={styles.row}>
							<Text>最近浏览</Text>
							<Text> > </Text>
						</View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	profile: {
		backgroundColor: '#ffffff'
	},
	img: {
		height: 200,
		opacity: 0.2,
	},
	info: {
		marginTop: -90,
		height: '100%'
	},
	user: {
		paddingHorizontal: 25,
		flexDirection: 'row',
		paddingBottom: 10
	},
	head: {
		height: 80,
		width: 80,
		borderRadius: 40,
		borderColor: '#D1EEEE',
		borderWidth: 1
	},
	userRight: {
		marginLeft: 10,
		marginRight: 80,
		justifyContent: 'center'
	},
	name: {
		color: '#222222',
		fontSize: 20
	},
	describe: {
		marginTop: 5
	},
	list: {
		borderTopWidth: 1,
		borderColor: '#D1EEEE',
		paddingHorizontal: 15,
		paddingVertical: 10
	},
	row: {
		height: 50,
		borderBottomColor: '#D1EEEE',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

