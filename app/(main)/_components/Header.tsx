"use client"

import { AuthContext } from '@/context/AuthContext'
import Image from 'next/image'
import React, { useContext } from 'react'

function Header() {
  const {user}=useContext(AuthContext);
  return user && (
    <div className='p-3 fixed shadow-sm flex justify-between items-center px-14'>
        <Image 
            src={'/logo.svg'}
            alt='logo'
            width={50}
            height={50}
        />
    </div>
  )
}

export default Header