import React from 'react'
import '../Assets/css/footer.css'
import { VscGithub } from 'react-icons/vsc'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
        <div className="Info">
          <p>Diplomatura en Programación Web</p>
          <br/>
          <p>Full Stack Developer - Módulo Front End</p>
        </div>
        <div className="socialNetworks">
          <a href="https://github.com/avalosomarj/" target='_blank'><VscGithub/></a>
          <a href="https://www.linkedin.com/in/avalosomarj/" target='_blank'><BsLinkedin/></a>
        </div>
    </footer>
  )
}

export default Footer