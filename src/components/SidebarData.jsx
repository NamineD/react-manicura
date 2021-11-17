import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, faGrinBeam, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const SidebarData = [
    {
        title: 'Inicio',
        path: '/react-manicura/',
        icon: <FontAwesomeIcon icon={faHome} />,
        className: 'nav-text'
    },
    {
        title: 'Galeria',
        path: '/react-manicura/galeria',
        icon: <FontAwesomeIcon icon={faImage} />,
        className: 'nav-text'
    },
    {
        title: 'Cotización',
        path: '/react-manicura/cotizacion',
        icon: <FontAwesomeIcon icon={faDollarSign} />,
        className: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/react-manicura/contacto',
        icon: <FontAwesomeIcon icon={faGrinBeam} />,
        className: 'nav-text'
    }
]

export default SidebarData
