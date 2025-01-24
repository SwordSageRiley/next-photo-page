import Link from 'next/link';
import '@/app/css/nav.css';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { useScrollPosition } from 'react-use-scroll-position';


export function Nav() {
    //state for the burger menu and scroll position to change styles on the nav bar.
    const [burger, setBurger] = useState(false);
    const { x, y } = useScrollPosition();

    //self explanitory
    function toggleBurger() {
        setBurger(!burger);
    }


    return (
        <div className='nav flex centered'>
            <div className='socials'>
                <SocialIcon url='https://www.instagram.com/SwordSagePhotos/' className='icon' bgColor='transparent' fgColor='black' />
                <SocialIcon url='https://www.x.com/SwordSagePhotos' className='icon' bgColor='transparent' fgColor='black' />
                <SocialIcon url='https://bsky.app' className='icon' bgColor='transparent' fgColor='black' />
            </div>
            <div className='mid'>
                RILEY ALOUETTE
                <img className='logo' src='https://i.imgur.com/8Sm7oAx.png' alt='Avali Illuminate Symbol' />
                PHOTOGRAPHY
            </div>
            <div className='menu'>
                <img className='burger' src='https://i.imgur.com/7xRqU54.png' alt='Dropdown Menu' onClick={toggleBurger} />
                <ul className={`${burger ? 'burgOpen' : 'burgClosed'} burg`}>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/about'>About</Link></li>
                    <li><Link href='/contact'>Contact Me</Link></li>
                    <li><Link href='/nature'>Nature</Link></li>
                    <li><Link href='/wildlife'>Wildlife</Link></li>
                    <li><Link href='/urban'>Urban</Link></li>
                    <li><Link href='/architecture'>architecture</Link></li>
                </ul>
            </div>
        </div>);
}