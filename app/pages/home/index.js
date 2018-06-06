import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import Block from './block';

export default class HomePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					key: 'lingli',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267618265&di=33d09273771c25564bba66a0e4258bf8&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122210053682326.jpg',
					img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267572721&di=bf7e221006fc19722a8787649822227d&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017120717520663564.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'jj',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267649234&di=3a7de24126facabaf4672dcbffb7d93b&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2018-1%2F2018012513570183550.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267716221&di=688cb797750236b007c787d30fc85eae&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-11%2F2017113016561630993.jpg',
					img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267978374&di=b41b4c27c97bb0f9799f43425cc6969e&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2017%2F09%2F1602305040447.jpg',
					title: '若教移在香闺畔',
					info: '一朵花开千叶红，开时又不藉春风。若教移在香闺畔，定与侍人艳态同。'
				},
				{
					key: 'hh',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '共看明月应垂泪，一夜乡心五处同',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'pp',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527870829927&di=52bbd1fd02cfe024adb44cf37a4755e7&imgtype=0&src=http%3A%2F%2Fimg.9553.com%2Fuploadfile%2F2017%2F0709%2F20170709095635291.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '缕发画前寻，偏等望日思',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: '12',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267572721&di=bf7e221006fc19722a8787649822227d&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017120717520663564.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'qw',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527866045137&di=ae40862ec87a5b15322f6a6525d5b8c7&imgtype=0&src=http%3A%2F%2Fupload.taihainet.com%2Fnews%2FUploadFiles_6334%2F201508%2F20150811224441669.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '去年今日此门中，人面桃花相映红。',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'e',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267618265&di=33d09273771c25564bba66a0e4258bf8&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122210053682326.jpg',
					img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267572721&di=bf7e221006fc19722a8787649822227d&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017120717520663564.jpg',
					title: '哈哈哈，你真丑',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'asd',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527866045137&di=ae40862ec87a5b15322f6a6525d5b8c7&imgtype=0&src=http%3A%2F%2Fupload.taihainet.com%2Fnews%2FUploadFiles_6334%2F201508%2F20150811224441669.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'xc',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267618265&di=33d09273771c25564bba66a0e4258bf8&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122210053682326.jpg',
					img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267572721&di=bf7e221006fc19722a8787649822227d&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017120717520663564.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'fdg',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527866045137&di=ae40862ec87a5b15322f6a6525d5b8c7&imgtype=0&src=http%3A%2F%2Fupload.taihainet.com%2Fnews%2FUploadFiles_6334%2F201508%2F20150811224441669.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'ert',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267389572&di=5007211422f5eb30df64d55ecd4c8764&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122811264883374.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267618265&di=33d09273771c25564bba66a0e4258bf8&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017122210053682326.jpg',
					img2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528267572721&di=bf7e221006fc19722a8787649822227d&imgtype=0&src=http%3A%2F%2Fpic.qqtn.com%2Fup%2F2017-12%2F2017120717520663564.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
				{
					key: 'vbn',
					img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527866045137&di=ae40862ec87a5b15322f6a6525d5b8c7&imgtype=0&src=http%3A%2F%2Fupload.taihainet.com%2Fnews%2FUploadFiles_6334%2F201508%2F20150811224441669.jpg',
					img1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg',
					img2: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg',
					title: '骑着马穿越草原',
					info: '白桦林，积雪，湖泊---带你穿过森林，宛如梦境。'
				},
			],
		};
	}

	render() {
		return (
			<View style={styles.home}>
				<Text style={styles.title}>一朵花开，千叶红</Text>
				<FlatList data={this.state.list}
						  renderItem={ ({item}) => <Block item={item} navigation={this.props.navigation}></Block> }/>

			</View>
		);
	}

	// _onPress() {
	// 	const {navigate} = this.props.navigation;
	// 	navigate('HomeDetail');
	// }
}

const styles = StyleSheet.create({
	home: {
		backgroundColor: '#ffffff',
		paddingBottom: 60,
		paddingTop: 2
	},
	title: {
		padding: 10,
		fontSize: 20,
		borderBottomWidth: 1,
		borderColor: '#dddddd',
		borderStyle: 'dotted',
	},
});
