import styled from 'styled-components'

export const TopicWrapper = styled.div`
	overflow: hidden;
	padding: 20px 0 10px 0;
	margin-left: -15px;
	border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
	float: left;
	background: #f7f7f7;
	height: 32px;
	line-height: 32px;
	font-size: 14px;
	color: #333;
	border: 1px solid #dcdcdc;
	border-radius: 4px;
	padding-right: 10px;
	margin-left: 15px;
	margin-bottom: 15px;
	.topic-img {
		display: block;
		float: left
		width: 32px;
		height: 32px;
		margin-right: 10px;
	}
`