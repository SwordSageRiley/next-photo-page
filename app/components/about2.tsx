import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

import '@/app/css/about.css';


export function About() {

    const fadeIn: Variants = {
        hide: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                duration: 2
            }
        }
    }
    const slideUp: Variants = {
        hide: {
            y: 100
        },
        show: {
            y: 0,
            transition: {
                duration: 2
            }
        }
    }
    const write: Variants = {
        hide: {
            width: 0
        },
        show: {
            width: "auto",
            transition: {
                duration: 2
            }
        }
    }

    return (
        <div className="about flex tint">
            <motion.div initial='hide' whileInView='show' variants={fadeIn} viewport={{ once: true }} className='selfportrait' >
                <img src='https://i.imgur.com/JB7vFMp.png' alt='Picture of Riley with her camera' className='selfpic' />
            </motion.div>
            <div className='about-me'>
                <motion.div initial='hide' whileInView='show' viewport={{ once: true }} variants={write} className='heading'>
                    <h3 className='heading'>About the Photographer</h3>
                </motion.div>
                <motion.div initial='hide' whileInView='show' viewport={{ once: true }} variants={slideUp}>
                    <h1 >Riley Alouette</h1>
                    <hr />
                </motion.div>

                <motion.div initial='hide' whileInView='show' viewport={{ once: true }} variants={slideUp}>
                    <p>Pacific Northwest photographer, designer, and creator.</p>

                    <p>Riley specializes in landscape and urban photography, following her passion to frame the world in enticing
                        and thought provoking ways. She strives to create visual stories that bring her audience into little stories
                        in life. Her work and style reflect a blend of minimalism, color, traditional paintings, evolking the same
                        feelings you might have in a museum.
                    </p>
                    <Link href='/about' key='About' className='button'>Learn More</Link>
                </motion.div>

            </div>
        </div>
    );
}
