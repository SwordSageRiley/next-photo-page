'use client';

import { Nav } from '@/app/components/nav';
import { Gallery } from '@/app/components/gallery';

export default function Urban(){

    const pictures = [
        {
            id: 1,
            url: 'https://i.imgur.com/nTvXxmi.jpeg',
            alt: 'Photo of wet leaves on concrete.'
        },
        {
            id: 2,
            url: 'https://i.imgur.com/BMElz3N.jpeg',
            alt: 'Photo of an aerial view of a motorcyclist in an intersection.'
        },
        {
            id: 3,
            url: 'https://i.imgur.com/i9eKSlo.jpeg',
            alt: 'Photo of someone standing in front of a bridge with neon lights.'
        },
        {
            id: 4,
            url: 'https://i.imgur.com/PYTegYw.jpeg',
            alt: 'Photo of a car at the end of a street with string lights.'
        },
        {
            id: 5,
            url: 'https://i.imgur.com/lLOkEtJ.jpeg',
            alt: 'Photo of the Seattle ferris wheel taken from the ferry.'
        },
        {
            id: 6,
            url: 'https://i.imgur.com/oTEbPEQ.jpeg',
            alt: 'Photo of passenger trains navigating a train yard.'
        },
    ]

    return (
        <div>
            <Gallery pics={pictures}/> 
            <Nav />
        </div>
    );
}
