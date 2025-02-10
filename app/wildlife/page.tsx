'use client';

import { Nav } from '@/app/components/nav';
import { Gallery } from '@/app/components/gallery';

export default function Wildlife(){

    const pictures = [
        {
            id: 1,
            url: 'https://i.imgur.com/GvvWCjf.jpeg',
            alt: 'Photo of a swan on a lake with reeds in the background.'
        },
        {
            id: 2,
            url: 'https://i.imgur.com/Grh3jsC.jpeg',
            alt: 'Photo of a swan reflected on a lake.'
        },
        {
            id: 3,
            url: 'https://i.imgur.com/tqPscDV.jpeg',
            alt: 'Photo of a swan reflected on a lake with a stone wall in the background.'
        },
        {
            id: 4,
            url: 'https://i.imgur.com/YFhUzt3.jpeg',
            alt: 'Photo of a beaver swimming.'
        },
        {
            id: 5,
            url: 'https://i.imgur.com/1UE7Oah.jpeg',
            alt: 'Photo of a hawk in a tree.'
        },
        {
            id: 6,
            url: 'https://i.imgur.com/2Ex3mDk.jpeg',
            alt: 'Photo of a hawk in a tree.'
        },
        {
            id: 7,
            url: 'https://i.imgur.com/JX7cJYU.jpeg',
            alt: 'Photo of a red tailed hawk standing in dried grass.'
        },
        {
            id: 8,
            url: 'https://i.imgur.com/lGqdHVr.jpeg',
            alt: 'Photo of a red tailed hawk standing over a snake it had caught.'
        },
        {
            id: 9,
            url: 'https://i.imgur.com/m0Urbbc.jpeg',
            alt: 'Photo of a hawk flying, carrying a snake it had caught.'
        },
        {
            id: 10,
            url: 'https://i.imgur.com/NEsO3ex.jpeg',
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
