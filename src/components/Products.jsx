import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    // Para que las imágenes no se salgan del ancho total del contenedor
    flex-wrap: wrap;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products