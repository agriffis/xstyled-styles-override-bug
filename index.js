import React from 'react'
import ReactDOM from 'react-dom'
import styled, { system, ThemeProvider, x } from '@xstyled/emotion'

const InfoBox = styled.box({ backgroundColor: 'info' })

const ErrorBox = styled.div({ backgroundColor: 'error' }, system)

const SuccessBox = props => <x.div backgroundColor='success' {...props} />

const App = () => (
  <ThemeProvider theme={{ colors: {
    error: 'red',
    success: 'green',
    info: 'blue',
  }}}>
    <InfoBox backgroundColor='black'>Info</InfoBox>
    <ErrorBox backgroundColor='black'>Error</ErrorBox>
    <SuccessBox backgroundColor='black'>Success</SuccessBox>
  </ThemeProvider>
)

const rootEl = document.querySelector('#root')

ReactDOM.render(<App />, rootEl)
