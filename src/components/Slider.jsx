import React, { useState } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { sliderItems} from '../data'

const Container = styled.div`
    // De esta manera el slider queda cubriendo el ancho completo y la altura total disponible de su contenedor
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    // Para que las demás imágenes del slider queden ocultas se debe usar la propiedad:
    overflow: hidden;
`;

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
    opacity: 0.5;
    z-index: 2;
`;
/* ---------- CONTENDEDOR DE LOS SLIDES ------------
    Ubicado entre las dos flechas de navegación
---------------------------------------------------*/
const Wrapper = styled.div`
    height: 100%;
    display: flex;

    // Esta transición hace que las slides se desplacen suavemente al cambiar de una a otra
    transition: all  1.5s ease;
    
    // Propiedad para mover el slide en el sentido horizontal. El vw indica que la imagen actual se mueve totalmente hasta salirse del contenedor y da entrada a la siguiente imagen que ocupa su lugar.
    transform: translateX(${props=>props.slideIndex * -100}vw)
`
/* ------------ ESTILO DE LA DIAPOSITIVA --------- */
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    // Toma la propiedad creada para los diferentes colores de los fondos de los slides
    background-color: #${props=>props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 90%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

/*------------------------------------------------ */
const Slider = () => {
    /* ESTADOS PARA ALTERNAR LAS IMÁGENES DEL SLIDER */
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        /* Aquí van los condicionales que manejan el avance y retroceso de los slides al hacer click en las flechas */
        if(direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        } else {
            // O sea, si le doy click al right arrow 
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    };

    return (
    <Container>
        {/* Agrego la propiedad direction a Arrow para poder dar estilo a las flechas de forma separada */}
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {/* Para acceder a los slides de manera dinámica */}
            {sliderItems.map(item=>(
            <Slide bg={item.bg}>
                <ImgContainer>
                    {/* Forma de insertar la imagen directamente sin necesidad de hacer imports */}
                    <Image src={item.img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
        
    </Container>
  )
}

export default Slider
