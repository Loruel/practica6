import React from 'react'

export default function NavbarCards({ data: { id, link, title } }) {
    return (
        <li className='md:hover:text-[#f05d52]' id={id}>
            <a href={link}>{title}</a>
        </li>

    )
}
