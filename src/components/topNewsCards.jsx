import React from 'react'

export default function TopNewsCards({ data: { image, top, title, text } }) {
    return (
        <div className='flex mt-5'>
            <figure className='w-2/5 h-40'>
                <img className='object-cover w-full h-full' src={image} alt="" />
            </figure>
            <div className='ml-5 w-3/5'>
                <h2 className='text-3xl font-bold text-[#f05d52] mt-4'>
                    {top}
                </h2>
                <h3 className='font-extrabold md:hover:text-[#f05d52]'>
                    {title}
                </h3>   
                <p className='text-gray-500'>
                    {text}
                </p>
            </div>
        </div>
    )
}   