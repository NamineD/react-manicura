import React, { useState } from 'react'
import HomeCarousel from '../components/Carousel'
import francesa from '../img/francesa.jpg'
import rusa from '../img/rusa.jpg'
import americana from '../img/americana.jpg'
import brasilenia from '../img/brasilenia.jpg'
import japonesa from '../img/japonesa.jpg'
import jelly from '../img/jelly.jpg'
import ombre from '../img/ombre.jpg'
import boomer from '../img/boomer.png'
import nailart from '../img/nailart.jpeg'
import extensiones from '../img/extensiones.jpg'


let articulos = [
    {img: francesa, titulo: "Manicura Francesa", descrip: "Se aplica un esmalte neutro de fondo y en la zona superior de la uña se dibuja una línea fina y blanca de forma horizontal. Para finalizar se sella todo con una capa de esmalte transparente."},
    {img: rusa, titulo: "Manicura Rusa", descrip: "Se limpia la uña completamente utilizando un torno. Se hace en seco y se retira la cutícula íntegramente. De esta forma se puede maquillar la uña más cerca de la raíz y el crecimiento no se hace evidente tan rápido."},
    {img: americana, titulo: "Manicura Americana", descrip: "Se considera una variante de la manicura francesa. La diferencia de esta es que le confiere un aspecto más natural al acabado final. En este caso se busca un contraste cromático más evidente."},
    {img: brasilenia, titulo: "Manicura Brasileña", descrip: "Se colocan unos guantes con principios activos de queratina y vitamina E nutritivos, antioxidantes y con propiedades regenerantes."},
    {img: japonesa, titulo: "Manicura Japonesa", descrip: "Se aplica una pasta especial sobre la placa de la uña para que ésta se vea más brillante y luminosa. El acabado final es con polvo de perlas de origen marino. Se consigue una uña brillante, sana y bonita de aspecto natural."},
    {img: jelly, titulo: "Manicura Jelly", descrip: "Se crea un efecto color transparente, gelatinoso,  como un cristal con color. Hechas de acrílico translúcido que se esculpe en la uña."},
    {img: ombre, titulo: "Manicura Ombré", descrip: "Se hace creando un color degradado en la uña, ya sea de más oscuro a más claro. También con transiciones entre diferentes tonos con degradado vertical, horizontal o diagonal."},
    {img: boomer, titulo: "Manicura Baby Boomer", descrip: "Se trata de una técnica de degradado de un tono nude a otro blanco. Esto se consigue utilizando polvos acrílicos que se colocan sobre la uña y luego se fusionan con un pincel."},
    {img: nailart, titulo: "Nail Art", descrip: "Consiste en decorar la uña con diferentes diseños utilizando diversos materiales, técnicas y mucha imaginación."},
    {img: extensiones, titulo: "Extensiones artificiales de uñas", descrip: "Una opción para quien tiene uñas cortas. Los tipos principales de extensión son las uñas de gel, de acrílico o de porcelana."}
]

const Home = () => {

    const tipoDeManicura = articulos.map((articulo) => {
        return <div className="card mb-3" style={{maxWidth: '940px'}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={articulo.img} className="img-fluid rounded-start"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h3 className="card-title">{articulo.titulo}</h3>
                                <p style={{fontFamily: 'cursive', fontSize: '18px', padding: '10px'}}>{articulo.descrip}</p>
                            </div>
                        </div>
                    </div>
                </div>
    })

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-9 mx-auto">Francis nail art</h1>

                <div className="col-9 mx-auto">
                    <HomeCarousel  />
                </div>
                <div className="col-9 mx-auto">
                    <p className="manicuraInfo" style={{fontSize: '20px', textAlign: 'center'}}>Una manicura es un tratamiento de belleza cosmético para las uñas y manos que suele realizarse en casa o en un salón de belleza. En una manicura se cortan o liman los bordes de las uñas, se realizan masajes a las manos y se aplica esmalte de uñas</p>
                </div>
                <div className="col-9 mx-auto" style={{border: '10px double pink'}}>
                    <h2>Tipos de Manicura</h2>
                    <h3>Manicura tradicional</h3>
                    <p>Es la base de las manicuras. El procedimiento es el mismo para todas salvo que se usan unas técnicas u otras en función del acabado y forma que se desee conseguir. En este tipo de manicura el esmalte dura unos días.</p>
                    <h3>Manicura semipermanente</h3>
                    <p>Este tipo de manicura se distingue por la duración del esmalte que puede ser hasta de tres semanas en perfectas condiciones. Para retirarlo es necesario acudir a un salón de belleza.</p>
                </div>
                <div className="col-11 mx-auto">
                    <h2>Tipos de Manicura según el tipo de esmalte</h2>
                    {tipoDeManicura}
                </div>
            </div> 
            
        </div>
    )
}

export default Home;
