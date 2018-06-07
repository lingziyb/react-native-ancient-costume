export default {
	getHomeData(){
		return fetch('http://www.xingmaow.com/index.php?s=/Label/index/label/%E6%B1%89%E6%9C%8D.html')
			.then((res) => res.text())
			.then(res => res)
	},
	getArticle(url){
		return fetch(url)
			.then((res) => res.text())
			.then(res => res)
	}
};