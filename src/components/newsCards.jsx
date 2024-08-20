import React from 'react'

export default function NewsCards({ data: { title, text } }) {
    return (
        <div className='text-white mb-10 h-full'>
            <h3 className='text-lg font-bold md:hover:text-[#eea854]'>
                {title}
            </h3>
            <p className='mb-5 mt-1 text-sm'>
                {text}
            </p>
        </div>
    )
}
