import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImage, faGrinBeam, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome} />,
        className: 'nav-text'
    },
    {
        title: 'Galeria',
        path: '/galeria',
        icon: <FontAwesomeIcon icon={faImage} />,
        className: 'nav-text'
    },
    {
        title: 'Cotización',
        path: '/cotizacion',
        icon: <FontAwesomeIcon icon={faDollarSign} />,
        className: 'nav-text'
    },
    {
        title: 'Contacto',
        path: '/contacto',
        icon: <FontAwesomeIcon icon={faGrinBeam} />,
        className: 'nav-text'
    }
]

export default SidebarData
