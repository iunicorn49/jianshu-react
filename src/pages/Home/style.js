import styled from 'styled-components'

export const HomeWrapper = styled.div`
	overflow: hidden;
	width: 960px;
	margin: 0 auto;
`

export const HomeLeft = styled.div`
	float: left;
	margin-left: 15px;
	padding-top: 30px;
	width: 625px;
	.banner-img {
		width: 625px;
		height: 270px;
	}
`

export const HomeRight = styled.div`
	float: right;
	width: 240px;
`

export const BackTop = styled.div`
	position: fixed;
	right: 100px;
	bottom: 100px;
	height: 60px;
	width: 60px;
	line-height: 60px;
	text-align: center;
	color: #333;
	border: 1px solid #333;
	font-size: 12px;
`