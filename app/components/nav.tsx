'use client';

import Link from 'next/link';
import '@/app/css/nav.css';
import { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
// import { useScrollPosition } from 'react-use-scroll-position';

export function Nav() {
    //state for the burger menu and scroll position to change styles on the nav bar.
    const [burger, setBurger] = useState(false);
    // const { x, y } = useScrollPosition();

    //self explanitory
    function toggleBurger() {
        setBurger(!burger);
    }



    return (
        <section className='nav flex centered'>
            <div className='socials'>
                <SocialIcon url='https://www.instagram.com/SwordSagePhotos/' className='icon' bgColor='transparent' fgColor='black' />
                <SocialIcon url='https://www.x.com/SwordSagePhotos' className='icon' bgColor='transparent' fgColor='black' />
                {/* <SocialIcon url='https://bsky.app/profile/swordsageriley.bsky.social' className='icon' bgColor='transparent' fgColor='black' /> */}
            </div>
            <div className='mid'>
                <div className='element1 vh-align'>RILEY&nbsp;</div>
                <div className='element2 vh-align'>ALOUETTE</div>
                <img className='logo element3' src='https://i.imgur.com/8Sm7oAx.png' alt='Avali Illuminate Symbol' />
                <div className='element4 vh-align'>PHOTOGRAPHY</div>
            </div>
            <div className='menu'>
                <img className='burger' src='https://i.imgur.com/7xRqU54.png' alt='Dropdown Menu' onClick={toggleBurger} />
                <div className={`${burger ? 'burg-open' : 'burg-closed'} burg`}>
                    <ul>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about'>About</Link></li>
                        {/* <li><Link href='/contact'>Contact Me</Link></li> */}
                        <li><Link href='/nature'>Nature</Link></li>
                        <li><Link href='/wildlife'>Wildlife</Link></li>
                        <li><Link href='/urban'>Urban</Link></li>
                        <li><Link href='/architecture'>Architecture</Link></li>
                    </ul>
                </div>

            </div>
        </section>);
}