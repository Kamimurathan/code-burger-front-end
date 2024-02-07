import React from 'react'

import { CartItems, CartResume } from '../../components'
import CartImage from '../assets/image-cart.png'
import { Container, CartImg, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartImage} alt="imagem do carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
