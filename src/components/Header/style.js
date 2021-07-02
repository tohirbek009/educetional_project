import styled from 'styled-components'


export const HeaderContainer = styled.div`
width: 100%;
box-sizing: border-box;
padding: 10px 100px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(22,30,37, 0.6);
position: absolute;
top: 0;
left: 0;
color: white !important;
z-index: 999;
:hover{
    background-color: rgba(100,100,115, 0.4);
}
`

export const Logo = styled.div`
font-size: 18px;
font-weight: bold;
text-transform: uppercase;
`

export const Nav = styled.div`
width: 70%; 
display: flex;
justify-content: space-between;
align-items: center;
`

export const HoverBox = styled.div`
background-color: rgba(230, 255, 255, 0.4);
backdrop-filter: blur(8px);
border-radius: 3px;
padding: 10px;
position: absolute;
top: 27px;
left: 0;
display: none;
transition: all 1.3s ease;
width: 200px;
`

HoverBox.P = styled.div`
margin-bottom: 10px;
text-transform: uppercase;
font-size: 13px;
width: fit-content;
position: relative;
cursor: pointer;
::before{
    position: absolute;
    content: "";
    top: 20px;
    left: 0;
    height: 1px;
    width: 0%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all 0.4s ease;
}
:hover{
    ::before{
        width: 110%;
    }
}
`


export const NavItem = styled.div`
position: relative;
padding: 10px 0;
width: 90px;
text-align:left;
:hover ${HoverBox}{
    display: block;
}

`

export const Item = styled.div`
font-size: 12px;
text-transform: uppercase;
/* text-align: left; */
:hover{
    font-weight: bold;
    cursor: pointer;
}
`

export const IconImg = styled.img`
width: 40px;
height: 35px;
margin-right: 10px;
`


export const HoverSelectLang = styled.div`
background-color: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
position: absolute;
top: 35px;
left: 40px;
display: none;
`

export const SelectLang = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
cursor: pointer;
:hover ${HoverSelectLang}{
    display: block;
}
`



HoverSelectLang.P = styled.div`
margin: 5px;
color: gray;
border-bottom: 1px solid black;
cursor: pointer;
:hover{
    color: darkgray;
}
`
