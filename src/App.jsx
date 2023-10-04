import { useState } from 'react'
import PagesRouter from './Router/PagesRouter'
import { Footer, Header } from './Components'
import './Assets/css/global.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <PagesRouter/>
      </main>
      <Footer/>
    </>
  )
}

export default App
