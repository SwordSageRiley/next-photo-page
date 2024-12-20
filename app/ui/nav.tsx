import Link from 'next/link';

export default function Nav(){
    return (
        <div className="yellow">
            <ul className="flex centered red">
                <Link href='/' key='Home'><li className="blue">Home</li></Link>
                <Link href='/Nature' key='Nature'><li className="blue">Nature</li></Link>
                <Link href='/Architecture' key='Architecture'><li className="blue">Architecture</li></Link>
                <Link href='/Contact' key='Contact Me'><li className="blue">Contact Me</li></Link>
            </ul>
        </div>);
}