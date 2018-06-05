import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class HomeDetailPage extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.articleDetail}>
				<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
					<Text style={styles.words}>
						不懂拒绝，其实是得了一种叫“不好意思”的病。过度友善的人，不忍或害怕拒绝别人，他们总是怀抱善意，宁可牺牲自己的时间、精力，也不想让别人失望。然而，害怕拒绝，害怕让别人失望，也是一种自卑。

						懂得拒绝，恰是最好的尊重 生活总有点欺软怕硬。一个完全不懂拒绝的人，也不可能赢得真正的尊重。

						不懂拒绝的人，迟早要学会狠下心肠。
					</Text>
					<Image style={styles.img}
						   source={{uri: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1413087566,536381263&fm=27&gp=0.jpg'}}/>
					<Text style={styles.words}> 1 不懂拒绝，是一种病

						很多人都喜欢《欢乐颂》里的关雎尔，因为她人长得甜美，心地也好。但她也常常为人诟病：正因为心地太好，她不懂得拒绝别人。

						关雎尔很多时候加班加得晚，都是因为帮别人做事。终于有一次，同事又病了请她完成剩下的工作，最后也是她签名确认。

						同事做的那一部分错漏百出，经理知道后却只骂了关雎尔。因为最后签名的是她，所有责任都要她来承担。而那个同事，出事之后一句话也没替她说，也没有一句安慰。

						关雎尔的傻白甜行径，其实也是今天许多人的写照：

						因为想塑造自己的良好形象，所以对朋友的请求来者不拒。终于，我们温暖了别人，却累死了自己。

					</Text>
					<Text style={styles.words}> 2 你有多重要？

						“TA一定是走投无路了，才来找我……”、“要是我把TA拒绝了，我就是坏人……”这是我们在接受求助时的心理。

						不懂拒绝的背后，是我们往往将自己放在太重要的位置。

						斗米恩升米仇的故事，却告诉了我们一个无法违背的人性：

						帮得了一次，就有第二次；帮得了第二次，就有后面无穷多次。而无休止帮助的剧情发展，往往是始于感恩，终于嫌隙。当哪一次帮不上忙，你就会变成罪人。

					</Text>
					<Image style={styles.img}
						   source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527869786081&di=9d4d404cf6082b08da2c1b5820f1ba4e&imgtype=0&src=http%3A%2F%2Fimg1.3lian.com%2F2015%2Fw11%2F75%2Fd%2F1.jpg'}}/>
					<Text style={styles.words}> 3 你的位置，决定了你的作为

						《蝙蝠侠大战超人：正义黎明》这部电影里面，从不拒绝救助任何人的超人，面临着一个巨大挑战：民众在恐慌，这么一个能力巨大的人，他为什么只是帮助人？未来会不会有一天，他用这种强大力量反过来杀人？

						因此在法庭上，众人拷问的是超人的这个问题：你到底是谁？

						不懂拒绝别人的人，有意无意地其实是把自己当成了超人。而他们之所以不懂得拒绝，其实正是因为他们跟超人一样，根本没有弄清楚自己到底是谁。

						关雎尔没有弄清楚自己的身份，她只是公司的其中一个职能，在一个讲究分工协作的五百强企业，她根本不可能完成所有职能的执行。所以她累死累活，最终只能得到跟超人同样的质问。

					</Text>
					<Text style={styles.words}> 4 拒绝！时而温柔、时而狠狠地拒绝！

						“有所为，有所不为”，是孔子的话。“有所不为”就是拒绝。什么样的人有所不为？君子。

						君子就是一种身份地位。像君子一样，对于不同身份地位的人，就有他们该做和该拒绝做的事。

						三毛说： “不要害怕拒绝他人，如果自己的理由出于正当。当一个人开口提出要求的时候，他的心里根本预备好了两种答案。所以，给他任何一个其中的答案，都是意料中的。”

						因此，拒绝别人，一定要先给出一个正当理由。“我要下班”、“我不喜欢这样做”都是正当理由。哪怕单纯就是不想帮，“我不想”也是最好的理由。

						如果不想伤害别人的面子，话就说得圆一点。

						钱锺书去世后，早年就暗恋杨绛的费孝通又再上门，临走时，杨绛送他一句话：“楼梯不好走，你以后也不要‘知难而上’了。”

						费孝通也是聪明人，以后也只能死了那条心。

						拒绝，不是对来者的侮辱。相反，不浪费大家的时间，是对双方最大的尊重。

						而每一次拒绝，你都是再一次回答了一个重要的问题，也促使对方思考这一个问题：

						我到底是谁。
					</Text>
				</ScrollView>
				<View style={styles.title}>
					<Text style={styles.name} onPress={this._onPress.bind(this)}>小小的我</Text>
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
		paddingTop: 20
	},
	content: {
		paddingLeft: 15,
		paddingRight: 5,
		paddingBottom: 20
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
		alignItems: 'center'
	},
	name: {
		width: 45,
		fontSize: 23,
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