import React from 'react'
import {Title, WrapperCards} from '../Contact/style'
import {Container, Text, CardImg,AllEvents} from './style'
import {dataEvent} from '../../mock/index'

const Index = () => {
    return (
        <Container>
            <Title event>Events</Title>
            <Text>Get all the latest updates from our school</Text>
            <WrapperCards event>
                {
                    dataEvent.map(({image, date, event}) => (
                        <WrapperCards.Card event>
                            <CardImg><img style={{width:'100%'}} src={image} alt="" /></CardImg>
                            <p style={{marginBottom:'0'}}>{date}</p>
                            <p style={{marginBottom:'40px'}}>{event}</p>
                        </WrapperCards.Card>
                    ))
                }
            </WrapperCards>
            <AllEvents>
                <Text seeAll={true}>There's always something exciting going on</Text>
                <Text seeAll={true} isHover>See all events</Text>
            </AllEvents>
        </Container>
    )
}

export default Index
