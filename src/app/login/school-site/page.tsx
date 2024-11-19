import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen flex items-center flex-col gap-4 justify-center text-blue-500'>
        Site under construction

        <div>
            <Link href='/login/exeat'>Click here to visit the exeat site </Link>
        </div>
    </div>
  )
}

export default page