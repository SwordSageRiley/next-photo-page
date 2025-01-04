import Link from 'next/link';
import { useContext } from 'react';
import '@/app/css/nav.css';


export function Nav() {

    return (
        <div className="nav">
            <ul className="flex centered">
                <div className='socials'>socials</div>
                <div className='mid'>
                    Riley Alouette
                    <img className='logo' src='https://i.imgur.com/8Sm7oAx.png' alt='Avali Illuminate Symbol' />
                    Photography
                </div>
                <div className='menu'>menu icon</div>
            </ul>
        </div>);
}