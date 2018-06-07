import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Block from './block';
import Service from './../../service';
import Cheerio from 'cheerio';
import Toast, {DURATION} from 'react-native-easy-toast'; 

export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [
				// {
				// 	key: 'lingli',
				// 	img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
				// 	img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267618265&di=33d09273771c25564bba66a0e4258bf8&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122210053682326.jpg',
				// 	img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267572721&di=bf7e221006fc19722a8787649822227d&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017120717520663564.jpg',
				// 	title: '骑着马穿越草原',
				// 	info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。',
				// 	imgs: []
				// },
				// {
				// 	key: 'jj',
				// 	img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267649234&di=3a7de24126facabaf4672dcbffb7d93b&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2018-1%2F2018012513570183550.jpg',
				// 	img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267716221&di=688cb797750236b007c787d30fc85eae&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017113016561630993.jpg',
				// 	img2: 'https://upload-images.jianshu.io/upload_images/9236769-5aca2f3ef46b6b4c.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/639',
				// 	title: '若教移在香闺畔',
				// 	info: '一朵花开千叶红，开时又不藉春风。若教移在香闺畔，定与侍人艳态同。',
				// 	imgs: []
				// },
				// {
				// 	key: 'hh',
				// 	img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
				// 	img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
				// 	img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
				// 	title: '共看明月应垂泪，一夜乡心五处同',
				// 	info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。',
				// 	imgs: []
				// }
			]
		};
	}

	render() {
		return (
			<View style={styles.home}>
				<Text style={styles.title}>花开，古风</Text>
				<FlatList data={this.state.list}
						  renderItem={ ({item, index}) =>
							  <Block key={index} item={item} navigation={this.props.navigation}></Block>
						  }/>


				<Toast ref="toast" style={{backgroundColor: '#00CDCD'}}
					   position='center' 
					   fadeInDuration={10}
					   fadeOutDuration={10}
				/>
			</View>
		);
	}

	async componentDidMount() {
		this.refs.toast.show('加载中...'); 

		const html = await Service.getHomeData();
		this.resolveHtml(html);
	}

	resolveHtml(html) {
		const $ = Cheerio.load(html);
		const body = $('.tlz_tlq_nr');

		const data = [];
		body.each((index, item) => {

			let article = {
				title: '',
				info: '',
				time: '',
				imgs: [],
				url: '',
				key: index + ''
			};

			article.url = 'http://www.xingmaow.com/' + $(item).find('.tlq_title a').attr('href');
			article.title = $(item).find('.tlq_title a').text();
			article.info = $(item).find('.tlq_z p').first().text();
			article.time = $(item).find('.tlq_z p').last().text();

			$(item).find('.tlq_tup img').each((i, el) => {
				article.imgs.push('http://www.xingmaow.com/' + $(el).attr('src'));
			});
			data.push(article);
		});

		this.setState({
			list: data
		})
	}


	// _onPress() {
	// 	const {navigate} = this.props.navigation;
	// 	navigate('HomeDetail');
	// }

}

const styles = StyleSheet.create({
	home: {
		backgroundColor: '#ffffff',
		paddingTop: 2,
		height: '100%'
	},
	title: {
		padding: 10,
		fontSize: 20,
		borderBottomWidth: 1,
		borderColor: '#D1EEEE',
		borderStyle: 'dotted',
	},
});
