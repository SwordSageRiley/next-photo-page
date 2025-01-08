import Link from 'next/link';
import '@/app/css/nav.css';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useScrollPosition } from 'react-use-scroll-position';


export function Nav() {
    const [burger, setBurger] = useState(false);
    const { x, y } = useScrollPosition();

    function toggleBurger() {
        setBurger(!burger);
    }


    return (
        <div className={`nav flex centered ${y>0 ? 'scrolled' : 'top'}`}>
            <div className='socials'>
                <SocialIcon url='https://www.instagram.com/SwordSagePhotos/' className='icon' bgColor='transparent' fgColor={y>0 ? 'black' : 'white'} />
                <SocialIcon url='https://www.x.com/SwordSagePhotos' className='icon' bgColor='transparent' fgColor={y>0 ? 'black' : 'white'} />
                <SocialIcon url='https://bsky.app' className='icon' bgColor='transparent' fgColor={y>0 ? 'black' : 'white'} />
            </div>
            <div className='mid'>
                RILEY ALOUETTE
                <img className='logo' src='https://i.imgur.com/8Sm7oAx.png' alt='Avali Illuminate Symbol' />
                PHOTOGRAPHY
            </div>
            <div className='menu'>
                <img className='burger' src='https://i.imgur.com/7xRqU54.png' alt='Dropdown Menu' onClick={toggleBurger} />
                <ul className={burger ? 'burgOpen' : 'burgClosed'}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact Me</Link></li>
                    <li><Link href='/wildlife'>Wildlife</Link></li>
                </ul>
            </div>
        </div>);
}