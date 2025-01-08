import '@/app/css/gallery.css';

export function Gallery(props) {


    return (
        <div className="gallery">
            {props.pics.map((pic: string) => (
                <div className='galbox'>
                    <img src={pic} className='galpic' alt='fix this' />
                </div>
            ))}
        </div>
    );
}