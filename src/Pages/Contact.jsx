import React from 'react'
import { PiSmiley, PiSmileyMeh, PiSmileySad } from 'react-icons/pi'

const Contact = () => {
  return (
    <div className='contactPage'>
      <form action=""  className='contactForm'>
        <label htmlFor="txtName">Nombre y apellido <span style={{color: 'red'}}>*</span></label>
        <input type="text" id='txtName' className='contactInput' required/>

        <label htmlFor="txtEmail">E-mail <span style={{color: 'red'}}>*</span></label>
        <input type="email" id='txtEmail' className='contactInput' required/>

        <p>¿Como calificas tu experiencia en esta pagina? <span style={{color: 'red'}}>*</span></p>
        <div className="facesIcon">
          <PiSmileySad onClick={() => alert("SAD")}/>
          <PiSmileyMeh onClick={() => alert("NEUTRAL")}/>
          <PiSmiley onClick={() => alert("HAPPY")}/>
        </div>

        <label htmlFor="txtMessage">Justifica tu eleccion dejando un mensaje con tus comentarios <span style={{color: 'red'}}>*</span></label>
        <textarea id='txtMessage' name="txtMessage" rows="10" cols="40" required></textarea>

        <span style={{color: 'red'}}>* Campos requeridos</span>

        <input type="submit" className='btnSubmit'/>
      </form>
    </div>
  )
}

export default Contact