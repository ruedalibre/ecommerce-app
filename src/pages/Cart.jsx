import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Container = styled.div`

`

const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top></Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer/>

    </Container>
  )
}

export default Cart