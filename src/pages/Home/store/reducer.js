import { fromJS } from 'immutable'

const defaultState = fromJS({
	topicList: [
		{
			id: 1,
			title: '读书',
			imgUrl: '//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		},
		{
			id: 2,
			title: '手绘',
			imgUrl: '//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		}
	],
	articleList: (() => {
		let list = []
		for (let i = 0; i <= 10; i++) {
			list.push({
				id: i + 1,
				title: 'title' + i,
				desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Why do we use it?It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
				imgUrl: '//upload-images.jianshu.io/upload_images/3107261-4ccedd24f5d7400e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240'
			})
		}
		return list
	})()
})

export default (state = defaultState, action) => {
	switch(action.type) {
	default:
		return state	
	}
}