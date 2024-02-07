import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import OffersImage from '../../containers/assets/offers-image.png'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Container, OffersImg, ContainerItems, Img, Button } from './styles'

export function OffersCarousel() {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('products')

      const onlyOffers = data
        .filter(product => product.offer)
        .map(product => {
          return { ...product, fomatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }

    loadOffers()
  }, [])

  const brakePoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <OffersImg src={OffersImage} alt="logo do pproduto" />
      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        brakePoints={brakePoints}
      >
        {offers &&
          offers.map(product => (
            <ContainerItems key={product.id}>
              <Img src={product.url} />
              <p>{product.name}</p>
              <p>{product.fomatedPrice}</p>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça agora
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
