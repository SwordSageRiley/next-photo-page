
import { useState, useEffect } from 'react';
import '@/app/css/gallery.css';


export function Gallery(props) {
    //state to control if the slides are on and where they are.
    const [slideOn, toggleSlide] = useState(false);
    const [slideIdx, setSlideIdx] = useState(0);

    //functions to control the slides
    function picClick(id) {
        toggleSlide(true);
        setSlideIdx(id - 1);
    }

    function nextSlide() {
        console.log(slideIdx);
        if (props.pics.length - 1 == slideIdx) {
            setSlideIdx(0);
        } else {
            setSlideIdx(slideIdx + 1);
        }
    }

    function prevSlide() {
        console.log(slideIdx);
        if (slideIdx == 0) {
            setSlideIdx(props.pics.length - 1);
        } else {
            setSlideIdx(slideIdx - 1);
        }
    }

    function closeSlide() {
        toggleSlide(false);
    }

    //event listener to handle keyboard input to control the slides
    useEffect(() => {
        const KeyDownHandler = (e) => {
            switch (e.code) {
                case "ArrowLeft":
                    prevSlide();
                    break;
                case "ArrowRight":
                    nextSlide();
                    break;
                case "Escape":
                    closeSlide();
                    break;
            }
        };
        document.addEventListener("keydown", KeyDownHandler);

        return () => {
            document.removeEventListener("keydown", KeyDownHandler);
        };
    });

    return (
        <div className="gal">
            <div className='gallery'>
                {props.pics.map((pic) => (
                    <div key={pic.id} className='gal-box' onClick={() => picClick(pic.id)}>
                        <img src={pic.url} className='gal-pic' alt={pic.alt} />
                    </div>
                ))}
            </div>

            <div className={`caro ${slideOn ? '' : 'slideOff'}`} >
                <div className='slideshow-box' onClick={closeSlide}>
                    <img src={props.pics[slideIdx].url} className='slideshow-pic' />
                </div>
                <button onClick={nextSlide} className='next-button'> next</button>
                <button onClick={prevSlide} className='prev-button'> prev</button>
                <button onClick={closeSlide} className='close-slide'>X</button>
            </div>
        </div>
    );
}