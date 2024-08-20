import React from 'react'
import NavbarCards from './navbarCards'

export default function Navbar({openMenu, toggleMenu}) {
    return (
        <ul className={`flex flex-col absolute top-0 right-0 p-10 space-y-6 bg-white w-2/3 h-[calc(100vh)] text-gray-500 ${!openMenu && 'hidden'} md:flex md:flex-row md:space-x-6 md:text-lg md:static md:bg-transparent md:w-fit md:h-fit`}>

            <div className='flex justify-end md:hidden'>
                <button onClick={toggleMenu}>
                <img src="icon-menu-close.svg" alt="" />
                </button>
                
            </div>

            {rutes.map((data, i) =>
                <NavbarCards key={i} data={data} />
            )}

        </ul>
    )
}


const rutes = [{
    id: '1',
    link: '/',
    title: 'Home'
},
{
    id: '2',
    link: '/',
    title: 'New'
},
{
    id: '3',
    link: '/',
    title: 'Popular'
},
{
    id: '4',
    link: '/',
    title: 'Trending'
},
{
    id: '5',
    link: '/',
    title: ' Categories'
},
]