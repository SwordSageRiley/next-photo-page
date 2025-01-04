import '@/app/css/toggles.css';
import localFont from 'next/font/local';

const myFont = localFont({ src: '../../public/avali-scratch-rus-romanized.ttf' });

export function Toggles({ avaliToggle, darkToggle }: {avaliToggle: any, darkToggle: any }) {
    return (
        <div className='dark toggles'>
            <button className={myFont.className} onClick={avaliToggle}>Avali</button>
            <button onClick={darkToggle}>Dark Mode</button>
        </div>
    )
}