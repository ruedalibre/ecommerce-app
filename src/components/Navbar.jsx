import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60px;
    /* Para usar el modo responsive llamo las propiedades creadas en el archivo responsive.js */
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    ${mobile({padding: "10px 0px"})}
`
// Estos son los elementos separados del navbar, según su ubicación

/* ----------- PARTE IZQUIERDA DEL NAVBAR --------------*/
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
    ${mobile({display: "none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({width: "50px"})}
`
/* ----------- PARTE CENTRAL DEL NAVBAR --------------*/
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({marginLeft: "10px", fontSize: "22px"})}
`

/* ----------- PARTE DERECHA DEL NAVBAR --------------*/
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    // Esto envía los elementos hasta el extremo derecho
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: "center"})}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
`


const Navbar = () => {
  return (
    <Container>
        {/* Como la navbar va a tener varios elementos, deben ir en un contenedor adicional */}
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
                    {/* Puedo agregar estilos al ícono de búsqueda de manera directa en sus propiedades*/}
                    <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>

            </Left>
            <Center><Logo>myBRAND</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar