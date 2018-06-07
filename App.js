import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import React, {Component} from 'react';
import {
	Text, View, StyleSheet
} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import HomePage from './app/pages/home/index';
import HomeDetailPage from './app/pages/article-detail';
import PublishPage from './app/pages/publish';
import MinePage from './app/pages/profile';

const First = StackNavigator({
	Home: {
		screen: HomePage,
		navigationOptions: {
			header: null
		}
	},
	HomeDetail: {
		screen: HomeDetailPage,
		navigationOptions: ({navigation}) => ({
			title: '文章详情',
		}),
	}
}, {
	initialRouteName: 'Home',
	headerMode: 'screen'
});
const Second = StackNavigator({
	Publish: {
		screen: PublishPage,
	}
});
const Third = StackNavigator({
	Mine: {
		screen: MinePage,
		navigationOptions: {
			header: null
		}
	}
});
const Navigator = TabNavigator({
	First: {
		screen: First,
		navigationOptions: {
			tabBarLabel: '主页'
		}
	},
	Second: {
		screen: Second,
		navigationOptions: {
			tabBarLabel: '发布'
		}
	},
	Third: {
		screen: Third,
		navigationOptions: {
			tabBarLabel: '我的'
		}
	}
}, {
	tabBarPosition: 'bottom',
	animationEnabled: false,
	initialRouteName: 'First',
	tabBarOptions: {
		activeBackgroundColor: 'white',
		activeTintColor: '#ffffff',
		inactiveTintColor: '#f4f4f4',
		style: {
			backgroundColor: '#00CDCD'
		},
		labelStyle: {
			fontSize: 15
		},
		indicatorStyle: {
			backgroundColor: '#7FFFD4',
		}
	}
});

export default class App extends Component {
	componentDidMount() {
		SplashScreen.hide();
	}

	render() {
		return (
			<Navigator/>
		);
	}
}

