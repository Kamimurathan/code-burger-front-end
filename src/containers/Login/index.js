import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Button, ErrorMessage } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import LoginImage from '../assets/image-login.png'
import LogoImage from '../assets/image-logo.png'
import {
  Container,
  LoginImg,
  ContainerItems,
  LogoImg,
  H1,
  Label,
  Input,
  P
} from './styles'

export function Login() {
  const history = useHistory()

  const { putUserData } = useUser()

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Digite um email válido')
      .required('O email é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 dígitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando seus dados...',
        success: 'Seja bem-vindo(a)!',
        error: 'Verifique seu email e senha!'
      }
    )
    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <LoginImg src={LoginImage} alt="imagem do login" />

      <ContainerItems>
        <LogoImg src={LogoImage} alt="imagem do logo" />

        <H1>Login</H1>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 70, marginBottom: 30 }}>
            Sign In
          </Button>
        </form>

        <P>
          Não possui conta?{' '}
          <Link style={{ color: '#ffffff' }} to="/cadastro">
            Sign Up
          </Link>
        </P>
      </ContainerItems>
    </Container>
  )
}
