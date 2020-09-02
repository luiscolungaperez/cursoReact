import React from 'react'
import { Router } from '@reach/router'

import { Logo } from './Components/Logo'
import { PhotoCardWithQuery } from "./container/PhotoCardWithQuery"
import { Home } from './pages/Home'
import { GlobalStyle } from './styles/GlobalStyles'


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  return (
    <>
      <GlobalStyle />
      <Logo />
      {
        detailId ?
          <PhotoCardWithQuery id={detailId} /> :
          <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
          </Router>
      }
    </>
  )
}
