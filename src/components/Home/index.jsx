import React from 'react'
import {Slide2, Container, RightIcon, LeftIcon} from './style'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import './main.css'

import WelcomeSchool from '../WelcomeSchool'

const Index = () => {
    return (
        <Container>
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={47.5}
              visibleSlides={1}
              currentSlide={1}
              totalSlides={3}
            >
              <Slider>
                <Slide index={0}>
                  <Slide2 bgImg = {img1}>
                    <Slide2.Title>Classroms for all system</Slide2.Title>
                    <Slide2.Text> Lorem ipsum dolor sit amet, consectetur adipisicing elit</Slide2.Text>
                  </Slide2>
                </Slide>
                <Slide index={1}><Slide2 bgImg = {img2}/></Slide>
                <Slide index={2}>
                  <Slide2 bgImg = {img3}>
                    <Slide2.Title lastSlide = {true}>Conditions for students</Slide2.Title>
                    <Slide2.Text lastSlide = {true}> Lorem ipsum dolor sit amet, consectetur adipisicing elit dolor sit amet, consectetur adipisicing elit </Slide2.Text>
                  </Slide2>
                </Slide>
              </Slider>
              <ButtonBack><BsChevronLeft/></ButtonBack>
              <ButtonNext><BsChevronRight/></ButtonNext>
            </CarouselProvider>
            <WelcomeSchool/>
        </Container>
    )
}

export default Index
