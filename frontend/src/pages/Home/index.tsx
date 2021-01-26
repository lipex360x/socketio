import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'

import * as S from './styles'

import Header from '../../components/Header'

const socket = io('http://localhost:3333')

const Home = () => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    setMessage('Boilerplate ReactJS')
    socket.on('hello', (message: string) => {
      console.log(message)
      socket.emit('front', 'Hello from Frontend')
    })
  }, [])

  return (
    <S.Section>
      <S.Container className="container">
        <Header>Hello React</Header>
        <p>{message}</p>
      </S.Container>
    </S.Section>
  )
}

export default Home
