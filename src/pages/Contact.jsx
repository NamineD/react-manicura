import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import jelly from '../img/jelly.jpg'


const Contact = () => {


    return (
        <Fragment>

            <div className="container container-fluid">
                <div className="row">
                    <div className="col col-sm">
                        <img src={jelly} className="cotiName"/>
                    </div>
                    <div className="col">
                        <h2 className="contact">Contacto</h2>
                        <p className="turno">Podes sacar un turno a través de:</p>
                            <div className="container">
                                <div className="col-7 mx-auto">
                                    <p className="Wts-inst"><FontAwesomeIcon icon={faWhatsapp} size="lg"/><a href="https://wa.me/34555005500">+52555-6699</a></p>
                                    <p className="Wts-inst"><FontAwesomeIcon icon={faInstagram} size="lg"/><a href="https://www.instagram.com/francisnailsuy/">Francis nails uy</a></p>
                                </div>
                            </div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default Contact
