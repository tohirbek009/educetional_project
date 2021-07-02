import React, {useReducer, useState} from 'react'
import {HeaderContainer, Logo, Nav, NavItem,Item, HoverBox, SelectLang,IconImg, HoverSelectLang} from './style'
// import { ReactComponent as Eng } from '../../assets/icons/eng.svg'
import Eng from '../../assets/images/eng.png'
import Uzb from '../../assets/images/uzbekistan.png'
import Rus from '../../assets/images/russia.png'
import {Link, NavLink} from 'react-router-dom'


const Index = () => {

    const [lang, setLang] = useState(Eng)


    const reducer = (state, action) => {
        switch(action.type){
            case 'rus':
                setLang(Rus)
                return state = "Russion"
            case 'uzb':
                setLang(Uzb)
                return state = "Uzbek"
            case 'eng':
                setLang(Eng)
                return state = "English"
            default:
                return state;
        }
    }

    const [language, dispatch] = useReducer(reducer, "English")

    return (
        <HeaderContainer >
            <Logo>
                <Link to='/' style={{textDecoration:"none", color:"white"}}>
                    Logo
                </Link>
            </Logo>
            <Nav>
                <NavItem>
                    <Item>About</Item>
                    <HoverBox>
                        <HoverBox.P>About US</HoverBox.P>
                        <HoverBox.P>Board of trustees</HoverBox.P>
                        <HoverBox.P>Leadership</HoverBox.P>
                        <HoverBox.P>staff</HoverBox.P>
                        <HoverBox.P>career opportunities</HoverBox.P>
                        <HoverBox.P>working at lesson</HoverBox.P>
                    </HoverBox>
                </NavItem>
                <NavItem>
                    <Item>Instruction</Item>
                    <HoverBox>
                        <HoverBox.P>About US</HoverBox.P>
                        <HoverBox.P>Board of trustees</HoverBox.P>
                        <HoverBox.P>Leadership</HoverBox.P>
                        <HoverBox.P>Transition middleschool</HoverBox.P>
                    </HoverBox>
                </NavItem>
                <NavItem>
                    <Item>Resources</Item>
                    <HoverBox>
                        <HoverBox.P>Family Resources</HoverBox.P>
                        <HoverBox.P>Donor information</HoverBox.P>
                    </HoverBox>
                </NavItem>
                <NavItem>
                   <Item>
                        <Link to='/events' style={{textDecoration:"none", color:"white"}}>
                            Events
                        </Link>
                    </Item>
                </NavItem>                
                <NavItem><Item>Enroll</Item></NavItem>
                <NavItem>
                   <Item>
                        <Link to='/contact' style={{textDecoration:"none", color:"white"}}>
                            Contact
                        </Link>
                    </Item>
                </NavItem> 
                <NavItem>
                    <SelectLang>
                        <IconImg src={lang}/>
                        <div>{language}</div>
                        <HoverSelectLang>
                            <HoverSelectLang.P onClick={() => dispatch({type:'eng'})}>English</HoverSelectLang.P>
                            <HoverSelectLang.P onClick={() => dispatch({type:'uzb'})}>Uzbek</HoverSelectLang.P>
                            <HoverSelectLang.P onClick={() => dispatch({type:'rus'})}>Russion</HoverSelectLang.P>
                        </HoverSelectLang>
                    </SelectLang>
                </NavItem>
            </Nav>
        </HeaderContainer>
    )
}

export default Index
