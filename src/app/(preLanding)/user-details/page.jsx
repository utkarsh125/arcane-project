"use client";

import React, { useState } from 'react'

const UserDetails = () => {
    const [gender, setGender] = useState("")
    return (
        <div className='bg-primary h-screen flex flex-col items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div onClick={()=> setGender("male")} className={`${gender === 'male' ? "bg-white" : ""} border-2 border-white px-14 py-4 rounded-xl rounded-r-none cursor-pointer`}>
                    <span className={`text-2xl ${gender === 'male' ? "text-black" : "text-white "}`}>Male</span>
                </div>
                <div  onClick={()=> setGender("female")} className={` ${gender === 'female' ? "bg-white" : ""} border-2 border-white px-10 py-4 rounded-xl rounded-l-none cursor-pointer`}>
                    <span className={` text-2xl ${gender === 'female' ? "text-black" : "text-white"}`}>Female</span>
                </div>
            </div>
            <div>
                <div>
                    <h1>Select </h1>
                </div>
            </div>
        </div>
    )
}

export default UserDetails