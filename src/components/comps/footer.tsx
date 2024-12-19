import React from 'react'
import { Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react'
const Footer = () => {
  return (
    <div className='w-full'>
         {/* Footer Section */}
         <footer className="w-full flex flex-col gap-3 bg-gray-800 py-6 text-white text-center">
        <p>© {new Date().getFullYear()} SHS-Exeat. All Rights Reserved.</p>
        <p>Powered by BuyGet ICT solutions</p>
      </footer>
    </div>
  )
}

export default Footer