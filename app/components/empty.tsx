import Link from "next/link";
import '@/app/css/empty.css';

export function Empty() {
    return (
        <div className="empty">
            <img src='https://i.imgur.com/5dtp1N0.jpeg' className="oops" alt='Image of fog hanging over a lake' />
            <div className="text">
                <h1>Sorry About That!</h1>
                <p>This page is still under construction.</p>
                <Link href='/' className="homeButton">Go Home</Link>
            </div>
        </div>
    );
}