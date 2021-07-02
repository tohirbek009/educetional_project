import styled from 'styled-components'


export const SubscribeLetter = styled.div`
/* margin: 10px; */
` 

export const Text = styled.div`
font-size: 22px;
margin-bottom: 18px;
color: white;
text-align: center;
padding-top: 30px;
`


export const Form = styled.form`
width: fit-content;
margin: 0 auto;
display: flex;
`
export const Input = styled.input`
padding: 10px;
outline: none;
border: none;
::placeholder{
    font-size: 11px;
}
`
export const SubsBtn = styled.div`
padding: 10px 24px;
font-size: 11px;
color: white;
background-color: #000000;
`


export const SocialLink = styled.div`
width: fit-content;
display: flex;
margin: 20px auto;
`
SocialLink.a = styled.a`
margin-left: 30px;
text-decoration: none;
color: white;
border-bottom: 2px solid transparent;
:hover{
    transform: scale(1.1);
    border-bottom: 2px solid white;
}
`

export const Footer = styled.div`
background-color: white;
margin-bottom: 0;
width: 100%;
padding: 7px;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
`

