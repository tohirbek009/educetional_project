import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
padding: 40px 0 0 0;
background-color: #082550;
`
export const WrapperTexts = styled.div`
width: 100%;
padding: 0 400px;
`

export const Title = styled.div`
font-size: 40px;
margin-bottom: 20px;
color: white;
text-transform: uppercase;
text-align: center;
`

export const Text = styled.div`
font-size: 14px;
margin-bottom: 30px;
color: white;
text-align: center;
margin-top: 30px;
`


export const SlidePart = styled.div`
padding: 50px 90px;
box-sizing: border-box;
background-color: #031339;
position: relative;
`

export const SlideItem = styled.div`
display: flex;
align-items: center;
margin-left: 30px;
`

SlideItem.Icon = styled.div`
color: white;
font-size: 66px;
margin-right: 10px;
`
SlideItem.Title = styled.div`
font-size: 16px;
color: white;
text-transform: uppercase;
`
SlideItem.Text = styled.div`
font-size: 12px;
color: white;
line-height: 20px;
`
