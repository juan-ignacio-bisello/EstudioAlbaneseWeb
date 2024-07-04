import React from 'react'
import { NavbarTool } from './components/NavbarTool'
import { Conocer } from './components/Conocer'
import { About } from './components/About'
import { FooterTool } from './components/Footer'

export const EstudioApp = () => {
  return (
    <>
        <NavbarTool />
        <Conocer />
        <About />
        <FooterTool />
    </>
  )
}
