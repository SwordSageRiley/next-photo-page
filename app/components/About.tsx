import Link from 'next/link';

import '@/app/css/about.css';


export function About() {
    return (
        <div className="About flex">
            <div className='portrait'>
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


/*
Jesaja specializes in outdoor, lifestyle, and commercial photography, following his passion to capture
the bigger picture in every frame. He channels his creativity into crafting visual stories that transcend
conventional boundaries. His work and style reflect a blend of minimalism, adventure, and timelessness.
He partners with brands, companies, and tourism boards, using his expertise to bring their stories to life
through compelling, impactful, and engaging content.

With a focus on outdoor, lifestyle, and commercial Photography, Jesaja's talent has attracted collaborations
with leading global brands. His work has been showcased in renowned publications, including the esteemed National
Geographic. Through his partnerships with brands, companies, and tourism boards, Jesaja's expertise shines as he
brings their stories to life through compelling, impactful, and engaging content. As a Director and Photographer,
Jesaja possesses the ability to seamlessly handle every phase of a project. From pre-production logistics to capturing
the perfect shots and the subsequent post-processing, every step is expertly managed, clients benefit from a complete
and professional package.
*/