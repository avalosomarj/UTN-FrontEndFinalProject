import React, { useRef, useState } from 'react'
import { PiSmiley, PiSmileyMeh, PiSmileySad } from 'react-icons/pi'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [smileySelected, setSmileySelected] = useState(false)
  const [smileyActive, setSmileyActive] = useState('')

  const handleSmileyActive = (smiley) => {
    setSmileySelected(true)
    setSmileyActive(smiley)
  }

  /* EmailJS */
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_oncc0ue', 'template_hodf7lq', form.current, '5sLpPPk6Sb-Yhnq5_')
      .then((result) => {
          //console.log(result.text)
          form.current.reset()
          setSmileySelected(false)
          setSmileyActive('')
          alert('Gracias por tus comentarios! Tu mensaje fue enviado correctamente.')
      }, (error) => {
          //console.log(error.text)
          alert('Hubo un inconveniente y tu mensaje no se envió. Intenta nuevamente.')
      })
  }
  /* EmailJS */

  return (
    <div className='contactPage'>

      <div className="txtInfo">
        <h2 style={{color: 'blue'}}>¡Hola!</h2>
        <h2>¿Tenés alguna consulta para hacernos?</h2>
      </div>

      <form ref={form} onSubmit={sendEmail}  className='contactForm'>
        <label htmlFor="txtName">Nombre y apellido <span>*</span></label>
        <input type="text" id='txtName' name="user_name" className='contactInput' placeholder='Tu nombre completo' required/>
        <br/>

        <label htmlFor="txtEmail">E-mail <span>*</span></label>
        <input type="email" id='txtEmail' name="user_email" className='contactInput' placeholder='Tu e-mail' required/>
        <br/>

        <p>¿Con qué estado calificarías tu experiencia en esta página? <span>*</span></p>
        <div className="facesIcon">
          <PiSmileySad onClick={() => handleSmileyActive('sad')}
            className={smileyActive == 'sad' ? 'sad' : 'sadh'}
          />

          <PiSmileyMeh onClick={() => handleSmileyActive('neutral')}
            className={smileyActive == 'neutral' ? 'neutral' : 'neutralh'}
          />

          <PiSmiley onClick={() => handleSmileyActive('happy')}
            className={smileyActive == 'happy' ? 'happy' : 'happyh'}
          />
        </div>

        <label htmlFor="txtMessage">Justifica tu elección dejando un mensaje con tus comentarios <span>*</span></label>
        <textarea id='txtMessage' name="message" rows="10" cols="40"
          style={smileyActive == 'sad' ? {color: 'red'} : smileyActive == 'neutral' ? {color: 'gray'} : {color: 'green'}}
          placeholder={smileySelected ? "" : "Seleccione un estado para habilitar este campo"}
          required disabled = {smileySelected == false}>
        </textarea>

        <span>* Campos requeridos</span>

        <button type='submit' className={smileySelected == false ? 'btnDisabled' : 'btnGlobal'} disabled = {smileySelected == false}>Enviar</button>
      
        {/* Input invisible para capturar el valor del emoji seleccionado mediante la propiedad name y enviarlo en EmailJS */}
        <input type="text" name="smileyActive" value={smileyActive} readOnly hidden/>

      </form>
    </div>
  )
}

export default Contact