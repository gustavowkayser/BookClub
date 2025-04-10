
import React from 'react'

import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
  } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between px-[6rem] py-2 shadow-md'>
        <div>
            <Link href="/">
                <Image src="/logo-transparent.png" alt="" width={100} height={100}/>
            </Link>
        </div>
        <div>
            <SignedIn>
                <UserButton/>
            </SignedIn>
        </div>
    </div>
  )
}

export default Navbar