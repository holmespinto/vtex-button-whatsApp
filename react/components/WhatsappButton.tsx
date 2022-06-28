import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

type types = {
  companyName: string
  textReplyTime: string
  logo: string
  width: number
  height: number
}
/* ENCABEZADO */
const Header = ({ companyName, textReplyTime, logo, height, width }: types) => {
  return (
    <div>
      <div className={styles.logo}>
        <img src={logo} height={height} width={width} alt="Logo de whatsapp" />
      </div>
      <div className={styles.texts}>
        <span className={styles.texts_span}>{companyName}</span>
        <span className={styles.texts_h1}>{textReplyTime}</span>
      </div>
    </div>
  )
}

type typesSend = {
  phoneNumber: string
}
/* boton enviar */
const SendButton = ({ phoneNumber }: typesSend) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if (!phoneNumber) {
      window.alert('Invalid Phone Number')

      return false
    }

    window.open(`https://wa.me/${phoneNumber}?text=${message}`)
    setMessage('')

    return true
  }

  // Creating a custom hook
  function useInput() {
    const [value, setValue] = useState(null)

    function onChange(e: any) {
      setValue(e.target.value)
    }

    return {
      value,
      onChange,
    }
  } // Creating a custom hook

  const inputProps = useInput()

  useEffect(() => {
    if (!inputProps) {
      setMessage(inputProps)
    }
  }, [inputProps])

  return (
    <div>
      <input
        // placeholder={placeholder}
        className={styles.input}
        // onChange={useInput}
        value={message}
      />
      <button className={styles.button} onClick={handleSend}>
        {'Enviar'}
      </button>
    </div>
  )
}

type Props = {
  logo: string
  phone: string
  companyName: string
  placeholder: string
  message: string
  width: number
  height: number
}

const WhatsappButton = ({
  logo,
  phone,
  // message,
  companyName,
  width,
  height,
}: Props) => {
  const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)

  return (
    <>
      <div>
        <Header
          companyName={companyName}
          textReplyTime={time}
          width={width}
          height={height}
          logo={logo}
        />

        <SendButton phoneNumber={phone} />
      </div>
    </>
  )
}

WhatsappButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  companyName: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsappButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3162789497',
  message: 'Esta es una comunicación',
  companyName: 'ITGlobers',
  width: 89,
  height: 35,
}

WhatsappButton.schema = {
  title: 'Botón de Whatsapp',
  type: 'object',
  properties: {
    logo: {
      title: 'logo de whatsapp',
      type: 'string',
      widget: {
        'ui:widget': 'image-upload',
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Por favor, agregue su número de celular',
      type: 'string',
    },
    messsage: {
      title: 'Mensaje',
      description: 'Por favor, agregue su mensaje',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    companyName: {
      title: 'ITGlobers',
      description: 'ITGlobers',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Ancho',
      description: 'Ancho',
      type: 'number',
    },
    height: {
      title: 'Alto',
      description: 'Alto',
      type: 'number',
    },
  },
}

export default WhatsappButton
