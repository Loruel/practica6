import React from 'react'
import NewsCards from './newsCards'

export default function News() {
    return (
        <>
            <div className='bg-[#00001a] h-96 mr-5 ml-5 md:mt-5 md:h-full'>
                <div className=''>
                    <h2 className='text-[#eea854] flex p-4 text-4xl font-bold'>
                        New
                    </h2>
                </div>
                
                <div className='mr-5 ml-5'>

                    {moreNews.map((data, i) =>
                        <NewsCards key={i} data={data} />
                    )}

                </div>
            </div>
        </>
    )
}



const moreNews = [{
    title: 'Hydrogen VS Electric Cars',
    text: 'Will hydrogen-fueled cars ever catch up to EVs?'
},
{
    title: 'The Downsides of AL Artistry',
    text: 'What are the possible adverse effects of on-demand AL image generation?'
},
{
    title: 'Is VC Funding Drying Up?',
    text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
},
]