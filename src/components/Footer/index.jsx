import React from 'react'
import {SubscribeLetter, Text, Input, Form, SocialLink, Footer, SubsBtn} from './style'
import {FaTwitter, FaInstagram, FaFacebook, FaLinkedin} from 'react-icons/fa'

const Index = () => {
    return (
        <div style={{backgroundColor:'#082550'}}>
             <SubscribeLetter>
                <Text subscribe={true}>Subscribe to our newsletter</Text>
                <Form>
                    <Input type="email" placeholder='Enter your email adress'/>
                    <SubsBtn>Subscribe</SubsBtn>
                </Form>
            </SubscribeLetter>

            <SocialLink>
                <SocialLink.a href="#"><FaInstagram/></SocialLink.a>
                <SocialLink.a href="#"><FaTwitter/></SocialLink.a>
                <SocialLink.a href="#"><FaFacebook/></SocialLink.a>
                <SocialLink.a href="#"><FaLinkedin/></SocialLink.a>
            </SocialLink>
            <Footer>Privacy Policy @Schoolwebsite.uz 2021</Footer>

        </div>
    )
}

export default Index
