import React from 'react';
import './MainTransmisson.css'
import { Link } from 'react-router-dom';
//components
import TransmissonLine from '../TransmissonLine/TransmissonLine';

//images importing

import image4 from '../images/image_4.jpeg';
import image6 from '../images/image_6.jpeg'
import image7 from '../images/image7.jpeg'
import image8 from '../images/image8.jpeg';
import image10 from '../images/image10.jpeg'
import image11 from '../images/image11.jpg'


function MainTransmission() {
    return (
        <div className="app">

            <div className="topbar">

                <h1 className="main__heading">Transmission Line App</h1>

            </div>
        
            <div className="transmisson">

                {/*first geometry*/}
                <TransmissonLine title="400kV Geometry" image={image7} path="firstgeometry"/>  
                <TransmissonLine title="220kV Geometry" image={image8} path="secondgeometry"/>
                <TransmissonLine title="132kV Geometry" image={image11} path="thirdgeometry"/>
                <TransmissonLine title="110kV Geometry" image={image10} path="fourthgeometry"/>
                <TransmissonLine title="230kV Geometry" image={image4} path="fifthgeometry"/>
                <TransmissonLine title="115kV Geometry" image={image6} path="sixthgeometry"/>
            </div>
        </div>
    )
}

export default MainTransmission
