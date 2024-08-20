import React from 'react'
import imageMobile from '/public/image-web-3-mobile.jpg'
import imageDesktop from '/public/image-web-3-desktop.jpg'

export default function PrincipalNews() {
    return (
        <div className='mb-5'>
            <figure className='flex'>

                <picture className='m-5'>
                    <source media='(max-width: 670px)' srcSet={imageMobile} />
                    <source media='(min-width: 671px)' srcSet={imageDesktop} />
                    <img src={imageMobile} alt="image" />   
                </picture>

            </figure>
            <div className='md:flex'>
                <div className=''>
                    <h2 className='font-extrabold pl-5 pr-5 text-4xl md:text-6xl md:w-full w-5/6 text-[#04021c]'>
                        The Bright Future of Web 3.0?
                    </h2>
                </div>
                <div className='mt-5 md:mt-0 ml-5 mr-5'>
                    <p className='text-gray-500 text-base md:w-5/6'>
                        We dive into the nest evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
                    </p>
                    <button className='mt-5 pl-5 pr-5 bg-[#f05d52] w-44 h-12 font-extrabold md:mt-10 md:hover:bg-[#00001a] md:hover:text-white'>
                        READ MORE
                    </button>
                </div>
            </div>
        </div>
    )
}
