import styled from 'styled-components'
import {ChevronLeft} from '@styled-icons/boxicons-regular/ChevronLeft'
import {Moon} from '@styled-icons/boxicons-solid/Moon'
import {ChevronRight} from '@styled-icons/boxicons-regular/ChevronRight'

export const Container = styled.div``

export const Slide2 = styled.div`
/* width: 100%; */
height: 100vh;
background-image: url(${({bgImg}) => bgImg});
background-size: 100%;
background-repeat: no-repeat;
position: relative;
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20,38,54, 0.4);
}
box-shadow: inset 0 0 90px 60px rgba(20,38,54, 0.7);
`


Slide2.Title = styled.div`
position: absolute;
${({lastSlide}) => lastSlide ? "top: 120px;" : 'bottom: 150px;'}
${({lastSlide}) => lastSlide ? "right: 100px;" : 'left: 100px;'}
font-size: 48px;
color: white;
`
Slide2.Text = styled.div`
position: absolute;
${({lastSlide}) => lastSlide ? "top: 180px;" : 'bottom: 100px;'}
${({lastSlide}) => lastSlide ? "right: 100px;" : 'left: 100px;'}
font-size: 22px;
color: white;
width: 500px;
text-align: center;
`



export const LeftIcon = styled(Moon)``
export const RightIcon = styled(ChevronRight)``