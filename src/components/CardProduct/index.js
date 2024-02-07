import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../index'
import { Container, Img, ProductName, ProductPrice } from './styles'

export function CardProduct({ product }) {
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  return (
    <Container>
      <Img src={product.url} alt="imagem do produto" />
      <div>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.fomatedPrice}</ProductPrice>
        <Button
          onClick={() => {
            putProductInCart(product)
            push('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
