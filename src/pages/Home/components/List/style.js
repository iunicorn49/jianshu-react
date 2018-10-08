import styled from 'styled-components'

export const ListItem = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	overflow: hidden;
	img {
		width: 125px;
		height: 100px;
		display: block;
		float: right;
		border-radius: 10px;
	}
`

export const ListInfo = styled.div`
	width: 485px;
	float: left;
	h3 {
		font-size: 18px;
		line-height: 27px;
		font-weight: bold;
		color: #333;
	}
	p {
		font-size: 13px;
		line-height: 24px;
		color: #999;
		word-break:break-all;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`