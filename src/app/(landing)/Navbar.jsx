import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div className='bg-primary text-white h-20 flex justify-between items-center px-20'>
            <div>
                <h1 className='font-semibold text-base'>LOGO</h1>
            </div>
            <div>
                <Link href="/signup">
                    <button className='font-medium cursor-pointer text-lg text-black bg-white px-5 py-2 rounded-full'>Get Started</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar