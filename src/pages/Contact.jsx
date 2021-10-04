import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logoContact from '../img/logocontact.jpg';
import logoContact2 from '../img/logocontact2.jpg';


const Contact = () => {


    return (
        <Fragment>

            <div className="row justify-content-md-center">
                <div class="card mb-3 bg-primary" style={{maxWidth: '750px'}}>
                    <img src={logoContact} class="card-img-top" />
                        <div class="card-body">
                            <h2 class="card-title" style={{textAlign: 'center'}}>Contacto</h2>
                            <div className="row justify-content-md-center">
                                <p class="card-text"><FontAwesomeIcon icon={faWhatsapp} size="lg"/>+52555-6699</p>
                                <p class="card-text"><FontAwesomeIcon icon={faInstagram} size="lg"/>Francis nails uy</p>
                            </div>
                        </div>
                        <div className="row justify-content-md-center">
                        <ul class="list-group">
                            <li class="list-group-item list-group-item-secondary">Esmaltado semi sobre uña natural sin diseño $550</li>
                            <li class="list-group-item list-group-item-secondary">Esmaltado semi sobre uña natural con diseño $650</li>
                            <li class="list-group-item list-group-item-secondary">Kapping extra $200</li>
                        </ul>
                        </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
