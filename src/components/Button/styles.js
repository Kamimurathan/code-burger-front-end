import styled from 'styled-components'

export const ContainerButton = styled.button`
  width: 180px;
  height: 35px;
  background: #9758a6;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 16px;
  text-align: center;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
