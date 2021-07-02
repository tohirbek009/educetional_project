import React from 'react'
import {Container, Title, Text, WrapperTexts, SlidePart, SlideItem} from './style'
import {dataSchool} from '../../mock'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import './main.css'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Index = () => {
    return (
        <Container>

            <WrapperTexts>
            <Title>Welcome to our school</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ad atque autem commodi, consequatur dicta dolor d
                oloreducimus excepturi illum ipsa minus, modi molestiae obcaecati 
                odio placeat porro quod voluptates voluptatum
            </Text>
            </WrapperTexts>

            <SlidePart>
                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={20}
                    visibleSlides={3}
                    totalSlides={dataSchool.length}
                >
                    <Slider>
                        {
                            dataSchool.map((value) => (
                                <Slide>
                                    <SlideItem>
                                        <SlideItem.Icon>{value.icon}</SlideItem.Icon>
                                        <div>
                                            <SlideItem.Title>{value.title}</SlideItem.Title>
                                            <SlideItem.Text>{value.about}</SlideItem.Text>
                                        </div>
                                    </SlideItem>
                                </Slide>
                            ))
                        }
                    </Slider>
                    <ButtonBack><BsChevronLeft/></ButtonBack>
                    <ButtonNext><BsChevronRight/></ButtonNext>
                </CarouselProvider>
            </SlidePart>
        </Container>
    )
}

export default Index
