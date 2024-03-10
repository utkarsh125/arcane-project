import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-primary text-white h-20 flex justify-between items-center px-8 md:px-20'>
            <div>
                <Link href="/">
                    <h1 className='font-semibold text-2xl cursor-pointer'>LOGO</h1>
                </Link>
            </div>
            <div>
                <Link href="/recipe">
                    <button className='font-medium cursor-pointer text-lg text-black bg-white px-5 py-2 rounded-full'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar