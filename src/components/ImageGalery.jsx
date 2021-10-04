import React, {useState} from 'react'
import './ImageGallery.css';
import CloseIcon from '@material-ui/icons/Close';

import img1 from '../img/1.jpg'
import img2 from '../img/2.jpeg'
import img3 from '../img/3.jpg'
import img4 from '../img/4.jpg'
import img5 from '../img/5.jpg'
import img6 from '../img/6.jpg'
import img7 from '../img/7.jpg'
import img8 from '../img/8.jpg'
import img9 from '../img/9.jpg'
import img10 from '../img/10.jpg'
import img11 from '../img/11.jpg'
import img12 from '../img/12.jpg'
import img13 from '../img/13.jpg'
import img14 from '../img/14.jpg'
import img15 from '../img/15.jpg'
import img16 from '../img/16.jpg'
import img17 from '../img/17.jpg'
import img18 from '../img/18.jpg'
import img19 from '../img/19.jpg'
import img20 from '../img/20.jpg'
import img21 from '../img/21.jpg'

const ImageGalery = () => {

    let data = [
        {
            id: 1,
            imgSrc: img1
        },
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 3,
            imgSrc: img3
        },
        {
            id: 4,
            imgSrc: img4
        },
        {
            id: 5,
            imgSrc: img5
        },
        {
            id: 6,
            imgSrc: img6
        },
        {
            id: 7,
            imgSrc: img7
        },
        {
            id: 8,
            imgSrc: img8
        },
        {
            id: 9,
            imgSrc: img9
        },
        {
            id: 10,
            imgSrc: img10
        },
        {
            id: 11,
            imgSrc: img11
        },
        {
            id: 12,
            imgSrc: img12
        },
        {
            id: 13,
            imgSrc: img13
        },
        {
            id: 14,
            imgSrc: img14
        },
        {
            id: 15,
            imgSrc: img15
        },
        {
            id: 16,
            imgSrc: img16
        },
        {
            id: 17,
            imgSrc: img17
        },
        {
            id: 18,
            imgSrc: img18
        },
        {
            id: 19,
            imgSrc: img19
        },
        {
            id: 20,
            imgSrc: img20
        },
        {
            id: 21,
            imgSrc: img21
        }
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) =>{
        setTempImgSrc(imgSrc);
        setModel(true);
    }

    return (
        <>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {data.map((item, index)=> {
                    return(
                        <div className="picture" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} style={{width: '100%'}}/>
                        </div>
                    )
                })}
                
            </div>
        </>
    )
}

export default ImageGalery
