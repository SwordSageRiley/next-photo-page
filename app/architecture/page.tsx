'use client';

import { Nav } from '@/app/components/nav';
import { Gallery } from '@/app/components/gallery';

export default function Architecture(){

    const pictures = [
        {
            id: 1,
            url: 'https://i.imgur.com/YuSo9JA.jpeg',
            alt: 'Photo of an apartment building highlighted by the sunset.'
        },
        {
            id: 2,
            url: 'https://i.imgur.com/I5EbYRM.jpeg',
            alt: 'Photo of a house in autumn reflected on a lake.'
        },
        {
            id: 3,
            url: 'https://i.imgur.com/lhq5dKf.jpeg',
            alt: 'Photo of Kinkaku-ji, the golden temple in japan, peeking over the treetops.'
        },
        {
            id: 4,
            url: 'https://i.imgur.com/dq8eyd4.jpeg',
            alt: 'Photo of a shrine looming behind budding tree branches.'
        },
        {
            id: 5,
            url: 'https://i.imgur.com/rRE1eMp.jpeg',
            alt: 'Photo of Tokyo tower.'
        },
        {
            id: 6,
            url: 'https://i.imgur.com/JVN6kQ0.jpeg',
            alt: 'Photo of a brick building in shadow.'
        },
        {
            id: 7,
            url: 'https://i.imgur.com/a0DuHWO.jpeg',
            alt: 'Photo of a colorful marble building front with repeating facades.'
        },
        {
            id: 8,
            url: 'https://i.imgur.com/NE3Xfjb.jpeg',
            alt: 'Photo of a victorian looking building in Albany center.'
        },
    ]

    return (
        <div>
            <Gallery pics={pictures}/> 
            <Nav />
        </div>
    );
}
