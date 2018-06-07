import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class HomeDetailPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				'在辽阔的巴尔虎草原上他这样听风吹过：吹过牧场，吹过人心与湖泊',
				'清楚地记得，我是从一本油印的歌谱集上抄了这两首歌。那时，父亲的林场来了位林业大学毕业的技术员（他后来做了我的姐夫），他在大学期间吹黑管。有次深夜，他用曲笛吹起了一首忧伤抒缓优美的曲子，以及另一首旋律稍快的曲子。旋律在深夜的场部上空回旋。第二天我问，昨晚曲笛吹的是什么曲子？《牧歌》与《嘎达梅林》，内蒙古草原上的两首民歌，他说。从那以后，我记住了这两首曲子《牧歌》、《嘎达梅林》。他工作分配到林场时带了很多曲谱，其中有一本油印曲谱。后来我翻到了这两首曲子，集子上印刷着蓝色的油印钢板手刻字体，字体上的油迹稍稍地洇开，一切使我新奇，我赶紧用软面抄把《嘎达梅林》与《牧歌》抄了下来。《牧歌》歌词很好记：',
				'其中最喜欢用口琴吹奏的有两首：《嘎达梅林》、《牧歌》。前者是歌唱内蒙古草原英雄嘎达梅林，曲调高昂，明亮，略带忧伤，却阔大，充满着歌唱英雄的音乐元素。辽阔蒙古草原上嘎达梅林的英雄主义，就那样扎根在一个南方少年的心里。而后一首《牧歌》，则风格迥异，起句就拉得很开，悠扬，缓慢，辽阔。如此抒情，在那个年代我第一次听到并歌唱这样的歌曲。它一开始就让少年时代的我为之迷恋。',
				'',
				'',
				'',
				'',
			]
		}
	}

	render() {
		return (
			<View style={styles.articleDetail}>
				<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
					{
						this.state.data.map((el) => {
							return (
								<Text style={styles.words}>{el}</Text>
							)
						})
					}
					<Image style={styles.img}
						   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg'}}/>
					<Text style={styles.words}>白云的下面是那洁白的羊群</Text>

					<Text style={styles.words}>蓝蓝的天空上飘着那白云</Text>
					<Image style={styles.img}
						   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg'}}/>
					<Text style={styles.words}>羊群好像是斑斑的白银</Text>
					<Text style={styles.words}>撒在草原上多么爱煞人</Text>
					<Text style={styles.words}>
						一遍又一遍，我望着远去的飞鸟

						我折回的目光跌落在蓬勃的青草上

						洁白的羊群引走了牧羊人，草原剩下一片空旷

						一条漫长的道路饱浸春天的悲痛

						面对青草，我泪水滔滔

						……

						平静的天空下，太阳、月亮滚过草原

						青草收回我，竖琴收回了它的歌手

					</Text>

				</ScrollView>
				<View style={styles.title}>
					<Text style={styles.name} onPress={this._onPress.bind(this)}>骑着马穿越草原</Text>
					<Text style={styles.author}>作者</Text>
					<Text style={styles.authorName}>闫冰</Text>
				</View>
			</View>
		);
	}

	_onPress() {
		console.log('从详情页返回首页');
		this.props.navigation.navigate('Home');
//        this.props.navigation.goBack();
	}
}

const styles = StyleSheet.create({
	articleDetail: {
		flexDirection: 'row',
		backgroundColor: '#ffffff',
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
		color: '#bbbbbb'
	}
});