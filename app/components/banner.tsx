import '@/app/css/banner.css';

export function Banner(){
    return (
        <div>
            <div className="image-container">
                <img className="banner" src="https://i.imgur.com/f5YlXkg.jpeg" alt="Photo of a fall forest, with a gradient of tree colors
                 reflected on the water." />
                <div className="middle-text">See Everything</div>
            </div>
        </div>
    );
}