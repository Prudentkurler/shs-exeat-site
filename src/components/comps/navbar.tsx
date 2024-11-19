"use client"
import { LayoutDashboard } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {

  const pathname = usePathname()
  return (
    <>

    {
      !pathname.includes('dashboard') &&(
    <div className='w-full h-[60px] bg-blue-400 flex items-center justify-between shadow-md p-3'>
        {/*Logo*/}
        <Link href='/'>
        <h3 className='text-xl text-white font-bold'>
            SHS-EXEAT
        </h3>
        </Link>

        {/*Right side*/}
        <div className='flex gap-3 items-center text-xl text-white font-semibold'>
            <Link href='/'>Home</Link>
            <Link href='/register'>Register</Link>
            <Link href='/support'>Support</Link>
            <Link href='/faqs'>FAQs</Link>
            <Link href='/login'>Login</Link>
            <Link href='/dashboard'><LayoutDashboard/></Link>
        </div>
    </div>
      )
    }
    </>
  )
}

export default NavBar