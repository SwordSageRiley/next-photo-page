import Link from 'next/link';


import '@/app/css/about.css';

export function About() {
    return (
        <div className="About flex">
            <div className='portrait'>

            </div>
            <div className='about-me'>
                <h3>About the Photographer</h3>
                <h2>Riley Alouette</h2>
                <p>OwO ipsum dowow sit amet, consectetuw adipiscing ewit, sed do eiusmod tempow incididunt
                    ut wabowe et dowowe magna awiqua. Adipiscing diam donec adipiscing twistique wisus.
                    Dictum sit amet justo donec enim diam vuwputate ut phawetwa. Mowestie nunc non bwandit massa enim.
                    Awiquam ut powttitow weo a diam sowwicitudin. Lectus pwoin nibh nisw condimentum id venenatis a condimentum.
                    Bibendum neque egestas congue quisque egestas diam. Awcu bibendum at vawius vew phawetwa vew tuwpis nunc eget.
                    Nunc awiquet bibendum enim faciwisis gwavida neque. Faucibus intewdum posuewe wowem ipsum. Lobowtis ewementum
                    nibh tewwus mowestie nunc non bwandit massa enim. Tincidunt augue intewdum vewit euismod. Ewit ut awiquam puwus
                    sit amet wuctus venenatis wectus. Egestas pwetium aenean phawetwa magna ac pwacewat vestibuwum. Consequat sempew
                    vivewwa nam wibewo justo waoweet sit amet cuwsus. Lacus vestibuwum sed awcu non odio euismod wacinia.
                </p>
                <Link href='/about' key='About'>Learn More</Link>
            </div>
        </div>
    );
}