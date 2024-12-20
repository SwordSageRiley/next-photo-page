import Link from 'next/link';

export default function Nav(){
    return (
        <div className="yellow nav">
            <ul className="flex centered red">
                <Link className='navLink' href='/' key='Home'><li className="blue">Home</li></Link>
                <Link className='navLink' href='/Nature' key='Nature'><li className="blue">Nature</li></Link>
                <Link className='navLink' href='/Architecture' key='Architecture'><li className="blue">Architecture</li></Link>
                <Link className='navLink' href='/Contact' key='Contact Me'><li className="blue">Contact Me</li></Link>
            </ul>
        </div>);
}