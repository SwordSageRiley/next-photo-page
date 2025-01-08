'use client';

import { Nav } from '@/app/components/nav';
import { Gallery } from '@/app/components/gallery';

export default function Wildlife(){

    const pictures = [
        {
            id: 1,
            url: 'https://i.imgur.com/SIWDItQ.jpeg',
            alt: ''
        },
        {
            id: 2,
            url: 'https://i.imgur.com/04w37e1.jpeg',
            alt: ''
        },
        {
            id: 3,
            url: 'https://i.imgur.com/TfWhrEx.jpeg',
            alt: ''
        },
        {
            id: 4,
            url: 'https://i.imgur.com/bobshri.jpeg',
            alt: ''
        },
        {
            id: 5,
            url: 'https://i.imgur.com/wjLZTAa.jpeg',
            alt: ''
        },
        {
            id: 6,
            url: 'https://i.imgur.com/0tu3FQQ.jpeg',
            alt: ''
        },

    ]

    return (
        <div>
            <Gallery pics={pictures}/> 
            <Nav />
        </div>
    );
}


/*
        'https://i.imgur.com/pCsGjT7.jpeg',
        'https://i.imgur.com/aUCzPyk.jpeg',
        'https://i.imgur.com/i10bstt.jpeg',
        'https://i.imgur.com/rhDH12a.jpeg'
 */