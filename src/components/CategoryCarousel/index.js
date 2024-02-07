import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import CategoryImage from '../../containers/assets/category-image.png'
import api from '../../services/api'
import { Container, CategoryImg, ContainerItems, Img, Button } from './styles'

export function CategoryCarousel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }

    loadCategories()
  }, [])

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <CategoryImg src={CategoryImage} alt="logo da Categoria" />

      <Carousel
        itemsToShow={4}
        style={{ width: '90%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <ContainerItems key={category.id}>
              <Img src={category.url} />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItems>
          ))}
      </Carousel>
    </Container>
  )
}
