
import { useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import '@/app/css/gallery.css';

export function Gallery(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };
    const [slide, setSlide] = useState(false);

    function picClick(id){
        const car = document.getElementsByClassName('caro');
        console.log(car);
       // car[0].goToSlide(id);
    }

    return (
        <div className="gal">
            <div className='gallery'>
                {props.pics.map((pic) => (
                    <div key={pic.id} className='gal-box' onClick={() => picClick(pic.id)}>
                        <img src={pic.url} className='gal-pic' alt={pic.alt} />
                    </div>
                ))}
            </div>

            <Carousel responsive={responsive}
                infinite={true}
                ssr={true}
                className={`${slide ? '' : 'slideOff'} caro`}
                centerMode={false}
                >
                {props.pics.map((pic) => (
                    <div key={pic.id} className='slideshow-box'>
                        <img src={pic.url} className='slideshow-pic' alt={pic.alt} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}