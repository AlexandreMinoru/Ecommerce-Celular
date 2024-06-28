import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styled from 'styled-components'
import "./Header.css"


function Header() {
  return (
    <header>
        <Link to="/">Loja</Link>
        <Link to="Cart">Carrinho</Link>
    </header>
  )
}

export default Header;