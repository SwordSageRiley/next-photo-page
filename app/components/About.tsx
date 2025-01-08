import Link from 'next/link';

import '@/app/css/about.css';


export function About() {
    return (
        <div className="About flex">
            <div className='selfportrait'>
                <img src='https://i.imgur.com/JB7vFMp.png' alt='Picture of Riley with her camera' className='selfpic'/>
            </div>
            <div className='about-me'>
                <h3>About the Photographer</h3>
                <h1>Riley Alouette</h1>
                <hr />
                <p>Pacific Northwest photographer, designer, and creator.</p>

                <p>Riley specializes in landscape and urban photography, following her passsion to frame the world in enticing
                    and thought provoking ways. She strives to create visual stories that bring her audience into little stories
                    in life. Her work and style reflect a blend of minimalism, color, traditional paintings, evolking the same
                    feelings you might have in a museum.
                </p>
                <Link href='/about' key='About' className='button'>Learn More</Link>
            </div>
        </div>
    );
}
