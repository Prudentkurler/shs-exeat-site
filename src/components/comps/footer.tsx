import React from 'react'
import { Twitter, Facebook, Instagram, Mail, Phone } from 'lucide-react'
const Footer = () => {
  return (
    <div className='w-full'>
         {/* Footer Section */}
      <footer className='w-full py-6 px-4 bg-gray-800 text-white'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
         {/* Social Media Links */}
        <div className='mt-6 text-center'>
          <ul className='flex justify-center gap-4'>
            <li>
              <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                <Twitter className='w-6 h-6 hover:text-blue-400' />
              </a>
            </li>
            <li>
              <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
                <Facebook className='w-6 h-6 hover:text-blue-600' />
              </a>
            </li>
            <li>
              <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
                <Instagram className='w-6 h-6 hover:text-pink-500' />
              </a>
            </li>
          </ul>
        </div>

          {/* Contact Info */}
          <div className='text-center md:text-right mt-6 md:mt-0'>
            <p className='flex items-center gap-2'>
              <Mail className='w-5 h-5' /> support@example.com
            </p>
            <p className='flex items-center gap-2 mt-2'>
              <Phone className='w-5 h-5' /> +1 234 567 890
            </p>
          </div>

          <div className=' items-center justify-center flex text-center md:text-left'>
            <ul className='flex flex-col md:flex-row gap-4'>
              <li>
                <a href='/privacy-policy' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href='/terms-of-service' className='hover:underline'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='/contact-support' className='hover:underline'>
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        
        <div>
            <h4>Powered by QuiverTech Solutions</h4>
        </div>
     
      </footer>
    </div>
  )
}

export default Footer