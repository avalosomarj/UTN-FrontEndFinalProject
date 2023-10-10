import React, { useState } from 'react'
import { PiSmiley, PiSmileyMeh, PiSmileySad } from 'react-icons/pi'

const Contact = () => {
  const [smileySelected, setSmileySelected] = useState(false)
  const [smileyActive, setSmileyActive] = useState('')

  const handleSmileySelected = (smiley) => {
    setSmileySelected(true)
    setSmileyActive(smiley)
  }

  return (
    <div className='contactPage'>

      <div className="txtInfo">
        <h2 style={{color: 'blue'}}>¡Hola!</h2>
        <h2>¿Tenés alguna consulta para hacernos?</h2>
      </div>

      <form action=""  className='contactForm'>
        <label htmlFor="txtName">Nombre y apellido <span>*</span></label>
        <input type="text" id='txtName' className='contactInput' placeholder='Tu nombre completo' required/>
        <br/>

        <label htmlFor="txtEmail">E-mail <span>*</span></label>
        <input type="email" id='txtEmail' className='contactInput' placeholder='Tu e-mail' required/>
        <br/>

        <p>¿Con qué estado calificarías tu experiencia en esta página? <span>*</span></p>
        <div className="facesIcon">
          <PiSmileySad onClick={() => handleSmileySelected('SAD')}
            className={smileyActive.toLowerCase() == 'sad' ? 'sad' : 'sadh'}
          />

          <PiSmileyMeh onClick={() => handleSmileySelected('NEUTRAL')}
            className={smileyActive.toLowerCase() == 'neutral' ? 'neutral' : 'neutralh'}
          />

          <PiSmiley onClick={() => handleSmileySelected('HAPPY')}
            className={smileyActive.toLowerCase() == 'happy' ? 'happy' : 'happyh'}
          />
        </div>

        <label htmlFor="txtMessage">Justifica tu elección dejando un mensaje con tus comentarios <span>*</span></label>
        <textarea id='txtMessage' rows="10" cols="40"
          style={smileyActive == 'SAD' ? {color: 'red'} : smileyActive == 'NEUTRAL' ? {color: 'gray'} : {color: 'green'}}
          placeholder={smileySelected ? "" : "Seleccione un estado para habilitar este campo"}
          required disabled = {smileySelected == false}>
        </textarea>

        <span>* Campos requeridos</span>

        <button type='submit' className={smileySelected == false ? 'btnDisabled' : 'btnGlobal'} disabled = {smileySelected == false}>Enviar</button>
      </form>
    </div>
  )
}

export default Contact