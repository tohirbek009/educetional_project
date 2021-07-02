import React from 'react'
import {Container, Title,
     WrapperCards, PhoneIcon, CardText, 
     LocationIcon, EmailIcon, ReachUs,
     Form, Input, LabelInputWrapper, StarIcon, Textarea,
     SubmitBtn
    } from './style'


const Index = () => {


    return (
        <Container>
            <Title>
                contact us
            </Title>
            <WrapperCards>
                <WrapperCards.Card>
                    <LocationIcon/>
                    <CardText first>Location</CardText>
                    <CardText>10 km Raiwind Road, Near Lahore Zoo Safari, Lahore</CardText>
                </WrapperCards.Card>
                <WrapperCards.Card>
                    <PhoneIcon/>
                    <CardText first>Phone</CardText>
                    <CardText first>+9975 524 45 55</CardText>
                    <CardText>+9975 524 45 55</CardText>
                </WrapperCards.Card>
                <WrapperCards.Card>
                    <EmailIcon/>
                    <CardText first>Email</CardText>
                    <CardText first>info@maktab.org</CardText>
                    <CardText>info@maktab.org</CardText>
                </WrapperCards.Card>
            </WrapperCards>
            <ReachUs>
                <form action="#">
                <Form>
                    <Title style={{width:'100%'}} reachUs={true}>Reach us here</Title>
                    <LabelInputWrapper isFull={true}>
                        <label htmlFor="name">Name <sup><StarIcon/></sup></label>
                        <Input type='text' id='name' placeholder='E.g: Muhammad Ali' />
                    </LabelInputWrapper>
                    <LabelInputWrapper isFull={false}>
                        <label htmlFor="email">Email <sup><StarIcon/></sup></label>
                        <Input type='email' id='email' placeholder='E.g: muhammad@gmail.com' />
                    </LabelInputWrapper>
                    <LabelInputWrapper isFull={false}>
                        <label htmlFor="number">Number <sup><StarIcon/></sup></label>
                        <Input type='number' id='number' placeholder='E.g: +99890 150 49 78' />
                    </LabelInputWrapper>
                    <LabelInputWrapper isFull={true}>
                        <label htmlFor="message">Your message</label>
                        <Textarea id='message' placeholder='Enter your message here' rows="6"/>
                    </LabelInputWrapper>
                    <p style={{width:'100%'}}>Request a meeting with us<sup><StarIcon/></sup></p>
                    <div style={{width:'100%', display:'block'}}>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <input type="radio" style={{backgroundColor:'#DFE2E9'}} />
                            <div>Online</div>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <input type="radio" style={{backgroundColor:'#DFE2E9'}} />
                            <div>At school</div>
                        </div>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <input type="radio" style={{backgroundColor:'#DFE2E9'}} />
                            <div>No interested</div>
                        </div>
                    </div>
                </Form>
                <SubmitBtn type='submit'>Sent</SubmitBtn> 
                </form>
            </ReachUs>
        </Container>
        
    )
}

export default Index;
