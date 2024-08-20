import React from 'react'
import TopNewsCards from './topNewsCards'

export default function TopNews() {
    return (
        <div className='p-5 md:flex'>
            <div className='md:flex'>

                {moreTop.map((data, i) =>
                    <TopNewsCards key={i} data={data} />
                )
                }

            </div>
        </div>
    )
}


const moreTop = [{
    image: 'image-retro-pcs.jpg',
    top: '01',
    title: 'Reviving Retro PCs',
    text: 'What happens when old PCs are given modern upgrades?'
},
{
    image: 'image-top-laptops.jpg',
    top: '02',
    title: 'Top 10 Laptops of 2022',
    text: 'Our best picks for various needs and budgets.'
},
{
    image: 'image-gaming-growth.jpg',
    top: '03',
    title: 'The Growth of Gaming',
    text: 'How the pandemic has sparked fresh opportunities.'
},
]