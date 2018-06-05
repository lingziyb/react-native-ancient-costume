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
			<View>
				<Image style={styles.img}
					   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528221434332&di=3a087737cfeb897cb8527732a495b9be&imgtype=0&src=http%3A%2F%2Fimg3.duitang.com%2Fuploads%2Fitem%2F201605%2F28%2F20160528160700_sieaQ.thumb.700_0.jpeg'}}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	img: {
		height: 200
	}
});

