import React from 'react'
import PropTypes from 'prop-types'

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
  //const time = new Date().toTimeString().split(`:`).slice(0, 2).join(`:`)
console.log(width,height)
  return <>
      <div className="fixed buttom-2 left-2 flex flexColumn">
      <a href={`https://wa.me/${phone}?text=${companyName}`}
      target="_blank"
      ref="noreferrer"
      >
        <img src={logo} alt="Google plus" width={width} height={height}/>
      </a>
      </div>
    </>

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
