import Link from 'next/link';
import { useContext } from 'react';


export default function Nav() {

    return (
        <div className="nav">
            <ul className="flex centered red">
                <div className='socials'></div>
                <div className='mid'>
                    Riley Alouette
                    <img className='logo' src='https://i.imgur.com/8Sm7oAx.png' alt='Avali Illuminate Symbol' />
                    Photography
                </div>
                <div className='menu'></div>
                
                <Link className='navLink' href='/' key='Home'><li className="blue">Home</li></Link>
                <Link className='navLink' href='/Nature' key='Nature'><li className="blue">Nature</li></Link>
                <Link className='navLink' href='/Architecture' key='Architecture'><li className="blue">Architecture</li></Link>
                <Link className='navLink right' href='/Contact' key='Contact Me'><li className="blue">Contact Me</li></Link>
            </ul>
        </div>);
}