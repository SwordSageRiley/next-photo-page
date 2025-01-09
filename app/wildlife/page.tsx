'use client';

import { Nav } from '@/app/components/nav';
import { Gallery } from '@/app/components/gallery';

export default function Wildlife(){

    const pictures = [
        {
            id: 1,
            url: 'https://i.imgur.com/SIWDItQ.jpeg',
            alt: 'Photo of a swan on a lake with reeds in the background.'
        },
        {
            id: 2,
            url: 'https://i.imgur.com/04w37e1.jpeg',
            alt: 'Photo of a swan reflected on a lake.'
        },
        {
            id: 3,
            url: 'https://i.imgur.com/TfWhrEx.jpeg',
            alt: 'Photo of a swan reflected on a lake with a stone wall in the background.'
        },
        {
            id: 4,
            url: 'https://i.imgur.com/bobshri.jpeg',
            alt: 'Photo of a beaver swimming.'
        },
        {
            id: 5,
            url: 'https://i.imgur.com/wjLZTAa.jpeg',
            alt: 'Photo of a hawk in a tree.'
        },
        {
            id: 6,
            url: 'https://i.imgur.com/0tu3FQQ.jpeg',
            alt: 'Photo of a hawk in a tree.'
        },
        {
            id: 7,
            url: 'https://i.imgur.com/pCsGjT7.jpeg',
            alt: 'Photo of a red tailed hawk standing in dried grass.'
        },
        {
            id: 8,
            url: 'https://i.imgur.com/aUCzPyk.jpeg',
            alt: 'Photo of a red tailed hawk standing over a snake it had caught.'
        },
        {
            id: 9,
            url: 'https://i.imgur.com/i10bstt.jpeg',
            alt: 'Photo of a hawk flying, carrying a snake it had caught.'
        },
        {
            id: 10,
            url: 'https://i.imgur.com/rhDH12a.jpeg',
            alt: 'Photo of a dragonfly on a rock.'
        },
        

    ]

    return (
        <div>
            <Gallery pics={pictures}/> 
            <Nav />
        </div>
    );
}
