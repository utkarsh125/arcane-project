import Link from 'next/link'
import React from 'react'
import { FaUserAlt } from "react-icons/fa";

const PrivateNavbar = () => {
    return (
        <div className='bg-primary text-white h-20 flex justify-between items-center px-20'>
            <div>
                <Link href="/">
                    <h1 className='font-semibold text-2xl cursor-pointer'>LOGO</h1>
                </Link>
            </div>
            <div>
                <Link href="/profile">
                    <FaUserAlt className='text-3xl' />
                </Link>
            </div>
        </div>
    )
}

export default PrivateNavbar