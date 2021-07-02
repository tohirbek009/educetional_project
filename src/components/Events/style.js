import styled from 'styled-components'

export const Container = styled.div`
background-color: #B0B8C7;
padding: 125px 60px 30px 60px;
`

export const Text = styled.div`
font-weight: ${({seeAll})=>!seeAll && 'bold'};
font-size: 22px;
color: #062953;
margin-bottom: ${({seeAll}) => !seeAll && '40px'};
:hover{
    font-weight: ${({isHover}) => isHover ? 'bold':'initial'};
    cursor: ${({isHover}) => isHover ? 'pointer' : 'default'};
}
`

export const CardImg = styled.div`
position: relative;
::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.3;
    z-index: 1;
    transition: all 0.3s ease-in-out;
}
:hover{
    ::before{
        opacity: 0;
    }
}
`

export const AllEvents = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 10px;
margin-top: 30px;
margin-bottom: 20px;
background-color: #fff;
`