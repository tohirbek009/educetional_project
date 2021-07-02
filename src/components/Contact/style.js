import styled from 'styled-components'
import {PhoneCall} from '@styled-icons/evaicons-solid/PhoneCall'
import {Location} from '@styled-icons/fluentui-system-filled/Location'
import {Email} from '@styled-icons/material-rounded/Email'
import {Star} from '@styled-icons/open-iconic/Star'


export const Container = styled.div`
width: 100%;
padding: 270px 0 0 0;
`

export const Title = styled.div`
font-size: 42px;
font-weight: ${({reachUs}) => !reachUs && 'bold'};
text-transform: uppercase;
color: #062953;
margin-bottom: 20px;
text-align: ${({event}) => event ? 'left' : 'center'};
`

export const WrapperCards = styled.div`
display: flex;
justify-content: space-between;
width: ${({event}) => event ? '100%' : '70%'};
margin: 0 auto 200px auto;
margin-bottom: ${({event}) => event ? '50px' : '200px'};
`

WrapperCards.Card=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: ${({event}) => event ? '10px':'35px 48px'};
background-color: ${({event}) => event ? 'white' : '#B0B8C7'};
width: ${({event}) => event ? '30%' : '32%'}; 
`

export const CardText = styled.div`
font-size: 16px;
margin-bottom: ${({first}) => first && "15px"};
`

export const PhoneIcon = styled(PhoneCall)`
color: #092757;
width: 48px;
`
export const LocationIcon = styled(Location)`
color: #092757;
width: 48px;
`
export const EmailIcon = styled(Email)`
color: #092757;
width: 48px;
`
export const StarIcon = styled(Star)`
width: 8px;
color: red;
`

export const ReachUs = styled.div`
background-color: #B0B8C7;
width: 100%;
padding: 30px 0;
`
export const Form = styled.form`
padding: 15px 20px;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
background: white;
width: 36%;
margin: 0 auto;
`

export const Input = styled.input`
background: #DFE2E9;
::placeholder{
    color: #B2B4BC;
}
padding: 15px 7px;
width: 100%;
outline: none;
border: none;
`

export const Textarea = styled.textarea`
background: #DFE2E9;
::placeholder{
    color: #B2B4BC;
}
padding: 15px 7px;
width: 100%;
outline: none;
border: none;
`

export const LabelInputWrapper = styled.div`
display: block;
width: ${({isFull})=> isFull ? '100%' : '40%'};
margin-top: 30px;
`

export const SubmitBtn = styled.button`
outline: none;
border: none;
padding: 10px 45px;
background: #0A2754;
color: #ffffff;
margin-left: 485px;
margin-top: 30px;
transition: all 0.3s ease-in-out;
:hover{
    background: #DFE2E9;
    color: black;
    cursor: pointer;
}
`