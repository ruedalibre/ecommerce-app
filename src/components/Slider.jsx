import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'

const Container = styled.div`
    // De esta manera el slider queda cubriendo el ancho completo y la altura total disponible de su contenedor
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    // Para que funcione este parámetro, el position del container (padre) debe ser relative
    position: absolute; 
    // Estos valores de top, bottom y margin hacen que las flechas del slider queden centradas verticalmente
    top: 0;
    bottom: 0;
    margin: auto; 
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
`

const Slider = () => {
  return (
    <Container>
        {/* Agrego la propiedad direction a Arrow para poder dar estilo a las flechas de forma separada */}
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
        
    </Container>
  )
}

export default Slider
