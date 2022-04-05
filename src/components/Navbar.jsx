import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
`
// Estos son los elementos separados del navbar, según su ubicación
const Left = styled.div`

`
const Center = styled.div`

`
const Right = styled.div`

`

const Navbar = () => {
  return (
    <Container>
        {/* Como la navbar va a tener varios elementos, deben ir en un contenedor adicional */}
        <Wrapper>
            <Left>Left</Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar