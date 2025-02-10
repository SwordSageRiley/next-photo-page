'use client';

import { Nav } from '@/app/components/nav';
import { Gallery } from '@/app/components/gallery';

export default function Nature(){

    const pictures = [
        {
            id: 1,
            url: 'https://i.imgur.com/CIwOHcN.jpeg',
            alt: 'Photo of 4 trees of different colors reflected on a lake.'
        },
        {
            id: 2,
            url: 'https://i.imgur.com/IaRj9xJ.jpeg',
            alt: 'Photo of a winding road through trees.'
        },
        {
            id: 3,
            url: 'https://i.imgur.com/yyQ49pY.jpeg',
            alt: 'Photo of a samara sitting on a bed of moss.'
        },
        {
            id: 4,
            url: 'https://i.imgur.com/UHlEQFM.jpeg',
            alt: 'Photo of a snowy mountain obscured by fog.'
        },
        {
            id: 5,
            url: 'https://i.imgur.com/QmL3YQd.jpeg',
            alt: 'Photo of boats on the water with houses and autumn trees in the foreground.'
        },
        {
            id: 6,
            url: 'https://i.imgur.com/wyol8Cw.jpeg',
            alt: 'Photo of a underground lake with the sun shining through an opening above.'
        },
        {
            id: 7,
            url: 'https://i.imgur.com/KJ96MGb.jpeg',
            alt: 'Photo of a brightly colored mushroom growing out of the forest floor.'
        },
        {
            id: 8,
            url: 'https://i.imgur.com/sGn7v0g.jpeg',
            alt: 'Photo of an outcrop of land with houses on the coast.'
        },
        {
            id: 9,
            url: 'https://i.imgur.com/CRMluXD.jpeg',
            alt: 'Black and white photo of mount Fuji over a beach.'
        },
        {
            id: 10,
            url: 'https://i.imgur.com/f8IFaPi.jpeg',
            alt: 'Photo of colorful autumn trees reflected in a lake.'
        },
        {
            id: 11,
            url: 'https://i.imgur.com/1UEqeTx.jpeg',
            alt: 'Photo of the stern of a sailboat sailing into the sunset.'
        },
        {
            id: 12,
            url: 'https://i.imgur.com/waDBV5j.jpeg',
            alt: 'Photo of mushrooms growing on a downed tree with a red leaf resting on them.'
        },
        {
            id: 13,
            url: 'https://i.imgur.com/aqXGOI8.jpeg',
            alt: 'Moody photo of a red leaf resting on ferns.'
        },
        {
            id: 14,
            url: 'https://i.imgur.com/UCMm2UP.jpeg',
            alt: 'Photo of power line towers across the top of a hill.'
        },
        {
            id: 15,
            url: 'https://i.imgur.com/M0v5QkZ.jpeg',
            alt: 'Photo of a small house on a beach with lines in the sand leading up to it.'
        },
    ]

    return (
        <div>
            <Gallery pics={pictures}/> 
            <Nav />
        </div>
    );
}
