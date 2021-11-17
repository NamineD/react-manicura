
import React from 'react'
import image from '../img/19.jpg'

const Cotizacion = () => {
    return (
        <div>
            <h2>Cotización</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        <img src={image} className="cotiImg" />
                    </div>
                    
                    <div className="col">
                        <div className="table-responsive">
                            <table className="table-primary table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Manicura</th>
                                        <th scope="col">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Esmaltado semi sobre uña natural sin diseño</td>
                                        <td>$550</td>
                                    </tr>
                                    <tr>
                                        <td>Esmaltado semi sobre uña natural con diseño</td>
                                        <td>$650</td>
                                    </tr>
                                    <tr>
                                        <td>Kapping extra</td>
                                        <td>$200</td>
                                    </tr>
                                    <tr>
                                        <td>Uñas esculpidas control gel</td>
                                        <td>$350</td>
                                    </tr>
                                    <tr>
                                        <td>Retirado de semi</td>
                                        <td>$400</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cotizacion
