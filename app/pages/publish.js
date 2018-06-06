import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TextInput} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

export default class PublishPage extends Component {

	componentWillMount() {
		this.props.navigation.setParams({rightOnPress: this.sendArticle.bind(this)});
	}

	sendArticle = () => {
		this.refs.toast.show('囍，发布成功 !', 1000, () => {
			this.props.navigation.navigate('Home');
		});
	}

	static navigationOptions = ({navigation}) => {
		const params = navigation.state.params || {};
		return {
			title: '撰写文章',
			headerRight: (
				<Text onPress={params.rightOnPress} style={{fontSize: 16, padding: 10}}>发布</Text>
			)
		};
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<View style={styles.publish}>
				<TextInput style={styles.title} placeholder='请输入标题' underlineColorAndroid="#dddddd"
						   selectionColor="#888888" placeholderTextColor="#888888"/>
				<TextInput style={styles.content}
						   placeholder='写文章...'
						   multiline={true}
						   underlineColorAndroid='transparent'
						   selectionColor="#888888" placeholderTextColor="#888888"/>

				<Toast ref="toast" style={{backgroundColor: '#9BCD9B'}}
					   position='top'
					   positionValue={50}
					   fadeInDuration={10}
					   fadeOutDuration={10}
				/>
			</View>
		);
	}


}

const styles = StyleSheet.create({
	publish: {
		backgroundColor: '#ffffff',
		padding: 10,
		height: '100%'
	},
	title: {
		fontSize: 22,
		paddingBottom: 20,
		color: '#888888'
	},
	content: {
		fontSize: 18,
		color: '#888888',
		textAlignVertical: 'top',
		height: '100%',
		paddingBottom: 60
	}
});