import { Search } from '@material-ui/icons'
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
/* al poner 1 unidad en flex asume que cada una de las partes de tienen una unidad de valor flex tienen el mismo espacio en sentido horizontal. Si agrego más unidades a uno de los elementos, modificará la fracción para adaptarla a la nueva distribución. */
    flex: 1;
    display: flex;
    align-items: center;
`

// Este span para elegir el lenguaje va dentro del contenedor izquierdo del navbar
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
`

const Center = styled.div`
    flex: 1;
`
const Right = styled.div`
    flex: 1;
`


const Navbar = () => {
  return (
    <Container>
        {/* Como la navbar va a tener varios elementos, deben ir en un contenedor adicional */}
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    input
                    <Search/>
                </SearchContainer>

            </Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar