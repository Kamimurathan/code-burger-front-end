import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

export const RegisterImg = styled.img`
  width: 50%;
`

export const ContainerItems = styled.div`
  width: 50%;
  background-color: #373737;
  margin: 0 auto;
  padding: 30px 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }
`

export const LogoImg = styled.img`
  width: 350px;
  margin: 30px auto 0;
`

export const H1 = styled.h1`
  text-align: center;
  margin-top: 10px;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;
  line-height: 16px;
`

export const Label = styled.p`
  margin-top: ${props => (props.error ? '12px' : '30px')};
  color: #ffffff;
  font-size: 12px;
  font-weight: 300;
  line-height: 14px;
`

export const Input = styled.input`
  height: 35px;
  margin-top: 3px;
  padding-left: 5px;
  border: ${props => (props.error ? '2px solid  #cc1717' : 'none')};
  border-radius: 3px;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
`

export const P = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 14px;
  color: #ffffff;
`

export const Link = styled.a`
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`
