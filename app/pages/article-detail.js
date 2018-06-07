import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Cheerio from 'cheerio';
import Service from './../service';

export default class HomeDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				title: '',
				content: [],
				time: '',
				author: []
			}
		}
	}

	render() {
		return (
			<View style={styles.articleDetail}>

				<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
					{
						this.state.data.content.map((el, index) => {
							return el.type == 'word' ? (<Text key={index} style={styles.words}>{el.value}</Text>) : (
									<Image key={index} style={styles.img} source={{uri: el.value}}/>)
						})
					}
				</ScrollView>

				<View style={styles.title}>
					<Text style={styles.name}
						  onPress={this._onPress.bind(this)}>{this.state.data.title.slice(0, 9)}</Text>
					<Text style={styles.author}>作者</Text>
					<Text style={styles.authorName}>{this.state.data.author}</Text>
				</View>
			</View>
		)
	}

	async componentDidMount() {
		const html = await Service.getArticle(this.props.navigation.state.params.url);

		console.log(5555, html);
		this.resolveHtml(html);
	}

	resolveHtml(html) {
		const $ = Cheerio.load(html);

		let article = {
			title: '',
			content: [],
			time: '',
			author: []
		};

		article.title = $('.discus_div1_tit_l h2').text();
		article.author = $('.discus_div1_tit_r h3').find('a').text();
		article.time = $('.discus_time_left li').first().text();

		$('.discus_div1_con p').each((index, item) => {
			if ($(item).find('img').length > 0) {
				article.content.push({
					type: 'img',
					value: 'http://www.xingmaow.com/' + $(item).find('img').attr('src')
				});
			} else {
				article.content.push({
					type: 'word',
					value: $(item).text()
				});
			}
		});

		this.setState({
			data: article
		});
	}

	_onPress() {
		console.log('从详情页返回首页');
		this.props.navigation.navigate('Home');
	}

}

const styles = StyleSheet.create({
	articleDetail: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
		height: '100%'
	},
	content: {
		paddingLeft: 15,
		paddingRight: 5,
		paddingBottom: 20,
		paddingTop: 10
	},
	img: {
		height: 200,
		marginBottom: 15,
	},
	words: {
		lineHeight: 28,
		marginBottom: 15,
		fontSize: 17,
		color: '#555555'
	},
	title: {
		flexDirection: 'column',
		alignItems: 'center',
		paddingTop: 10
	},
	name: {
		width: 43,
		fontSize: 22,
		textAlign: 'center',
		flexDirection: 'column',
		color: '#444444'
	},
	author: {
		width: 20,
		fontSize: 15,
		textAlign: 'center',
		marginTop: 10,
		color: '#bbbbbb'
	},
	authorName: {
		fontSize: 13,
		textAlign: 'center',
		marginTop: 10,
		color: '#bbbbbb',
		maxWidth: 20
	}
});