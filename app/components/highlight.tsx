import '@/app/css/highlight.css';

import { motion, Variants } from 'framer-motion';


export function Highlight() {

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

    return (
        <div className="highlight">
            <motion.div initial='hide' whileInView='show' variants={slideUp} className='one picture'>
                <img src='https://i.imgur.com/gZrtZ7Y.jpeg' className='one'
                    alt='Photo of a brick building in shadow.' />
            </motion.div>

            <motion.div initial='hide' whileInView='show' variants={slideUp} className='two picture'>
                <img src='https://i.imgur.com/iXQnb8v.jpeg' className='two'
                    alt='Photo of a house in autumn reflected on a lake.' />
            </motion.div>

            <motion.div initial='hide' whileInView='show' variants={slideUp} className='three picture'>
                <img src='https://i.imgur.com/TfWhrEx.jpeg' className='three'
                    alt='Photo of a swan reflected on a lake with a stone wall in the background.' />
            </motion.div>

            <motion.div initial='hide' whileInView='show' variants={slideUp} className='four picture'>
                <img src='https://i.imgur.com/bobshri.jpeg' className='four'
                    alt='Photo of a beaver swimming.' />
            </motion.div>

            <motion.div initial='hide' whileInView='show' variants={slideUp} className='five picture'>
                <img src='https://i.imgur.com/aUCzPyk.jpeg' className='five'
                    alt='Photo of a red tailed hawk standing over a snake it had caught.' />
            </motion.div>

            <motion.div initial='hide' whileInView='show' variants={slideUp} className='six picture'>
                <img src='https://i.imgur.com/OPTGDpW.jpeg' className='six'
                    alt='Photo of Riley sitting on a long in front of a beach.' />
            </motion.div>
        </div>
    );
}

