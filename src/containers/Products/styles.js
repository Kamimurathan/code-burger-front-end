import styled from 'styled-components'

export const Container = styled.div`
  background-color: #efefef;
  min-height: calc(100vh - 72px);
`

export const ProductsImg = styled.img`
  width: 100%;
`

export const CategoriesMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 20px;
`

export const CategoryButton = styled.button`
  background: none;
  color: ${props => (props.isActiveCategory ? '#9758a6' : '#9a9a9d')};
  border: none;
  border-bottom: ${props => props.isActiveCategory && '2px solid #9758a6'};
  font-size: 17px;
  line-height: 20px;
  padding-bottom: 5px;
  cursor: pointer;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
  justify-items: center;
  margin-top: 20px;
`
