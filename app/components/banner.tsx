import '@/app/css/banner.css';

export function Banner(){
    return (
        <div>
            <div className="image-container">
                <img className="banner" src="https://i.imgur.com/IQsayXS.jpeg" alt="Photo of a seed on moss" />
                <div className="middle-text">See Everything</div>
            </div>
        </div>
    );
}