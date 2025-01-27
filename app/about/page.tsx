import { Empty } from "@/app/components/empty";
import { Nav } from "@/app/components/nav";
import '@/app/css/about.css';

export default function AboutPage() {

    return (
        <div>
            <div className="About flex tint white-text">
                <div className='selfportrait' >
                    <img src='https://i.imgur.com/JB7vFMp.png' alt='Picture of Riley with her camera' className='selfpic' />
                </div>
                <div className='about-me'>
                    <div className='heading'>
                        <h3 className='heading'>About the Photographer</h3>
                    </div>
                    <div>
                        <h1 >Riley Alouette</h1>
                        <hr />
                    </div>

                    <div >
                        <p>Pacific Northwest photographer, designer, and creator.</p>

                        <p>Riley specializes in landscape and urban photography, following her passsion to frame the world in enticing
                            and thought provoking ways. She strives to create visual stories that bring her audience into little stories
                            in life. Her work and style reflect a blend of minimalism, color, traditional paintings, evolking the same
                            feelings you might have in a museum.
                        </p>
                    </div>

                </div>
            </div>
            <Nav />
        </div>
    );
}