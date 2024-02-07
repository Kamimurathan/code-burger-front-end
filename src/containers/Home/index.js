import React from 'react'

import { CategoryCarousel, OffersCarousel } from '../../components'
import HomeImage from '../assets/image-home.png'
import { Container, HomeImg } from './styles'

export function Home() {
  return (
    <Container>
      <HomeImg src={HomeImage} alt="imagem da home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
