import React from 'react'
import HomeCarousel from '../components/Carousel'
import logo from '../img/logo.png'


const Home = () => {

    return (
        <div className="container">
            <div className="row">
                <h1 className="col-9 mx-auto">Francis nail art</h1>

                <div className="col-9 mx-auto">
                    <HomeCarousel  />
                </div>
            </div> 
            
        </div>
    )
}

export default Home;
