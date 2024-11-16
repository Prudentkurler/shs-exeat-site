import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import React from 'react'
import { BadgeCheck, LogIn, TrendingUp } from 'lucide-react' // Using lucide-react icons for visuals
import { Separator } from '@/components/ui/separator'
import Footer from '@/components/comps/footer'


const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='w-full h-[90vh] flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300'>
        <h3 className='text-2xl md:text-5xl w-[70%] text-center text-white font-extrabold leading-snug'>
          Effortlessly Manage Exeat and Attendance with Ease
        </h3>
        <p className='mt-3 text-sm md:text-lg text-white/90'>
          Track, sign in, and sign out in real-time.
        </p>
        <Button variant='default' size='lg' className='mt-5 lg:w-[300px] rounded-2xl'>
          Get Started
        </Button>
      </div>

      {/* Features Section */}

      <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 mt-5'>
          Features
        </h2>
      <div className='w-full py-10 px-4 flex flex-col md:flex-row flex-wrap gap-6 justify-center bg-gray-50'>
      
        {/* Feature Cards */}
        {[
          {
            title: 'Easy registration and login',
            color: 'from-pink-400 to-red-400',
          },
          {
            title: 'Real-time sign-in/sign-out history',
            color: 'from-indigo-400 to-purple-400',
          },
          {
            title: 'Payment and fee tracking',
            color: 'from-green-400 to-teal-400',
          },
          {
            title: 'Parent communication tools',
            color: 'from-yellow-400 to-orange-400',
          },
        ].map((feature, index) => (
          <Card
            key={index}
            className={`bg-gradient-to-br ${feature.color} text-white w-full md:w-[22%] shadow-lg`}
          >
            <CardHeader>
              <CardTitle className='text-xl'>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-sm'>
                Learn more about how this feature can help you streamline
                management.
              </p>
            </CardContent>
          </Card>
        ))}

          {/* How It Works Section */}
      <div className='w-full py-10 px-4 bg-white'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6'>
          How It Works
        </h2>
        <div className='flex flex-col md:flex-row gap-8 justify-center items-center'>
          {/* Step 1 */}
          <div className='flex flex-col items-center text-center'>
            <div className='bg-blue-500 p-4 rounded-full text-white'>
              <BadgeCheck className='h-8 w-8' />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Register and Select Your School</h3>
            <p className='text-gray-600'>
              Create an account and connect to your school for easy management.
            </p>
          </div>
          {/* Step 2 */}
          <div className='flex flex-col items-center text-center'>
            <div className='bg-green-500 p-4 rounded-full text-white'>
              <LogIn className='h-8 w-8' />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Login and Manage Your Details</h3>
            <p className='text-gray-600'>
              Update your profile, sign in/out, and leave important messages.
            </p>
          </div>
          {/* Step 3 */}
          <div className='flex flex-col items-center text-center'>
            <div className='bg-yellow-500 p-4 rounded-full text-white'>
              <TrendingUp className='h-8 w-8' />
            </div>
            <h3 className='mt-4 text-xl font-semibold'>Track Attendance and Payments</h3>
            <p className='text-gray-600'>
              Stay informed about attendance and payment records in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator className='my-10' />

      {/* For Schools and Admins Section */}
      <div className='w-full py-10 px-4 bg-gray-50'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6'>
          For Schools and Admins
        </h2>
        <div className='flex flex-col md:flex-row gap-6 justify-center'>
          {/* Benefit 1 */}
          <div className='bg-white p-6 shadow-md rounded-lg flex flex-col items-center'>
            <BadgeCheck className='h-10 w-10 text-blue-500' />
            <h3 className='mt-4 text-lg font-semibold'>Track Records</h3>
            <p className='text-center text-gray-600'>
              Monitor students' sign-in and sign-out records effortlessly.
            </p>
          </div>
          {/* Benefit 2 */}
          <div className='bg-white p-6 shadow-md rounded-lg flex flex-col items-center'>
            <TrendingUp className='h-10 w-10 text-green-500' />
            <h3 className='mt-4 text-lg font-semibold'>Generate Reports</h3>
            <p className='text-center text-gray-600'>
              View and download revenue reports for better financial management.
            </p>
          </div>
          {/* Benefit 3 */}
          <div className='bg-white p-6 shadow-md rounded-lg flex flex-col items-center'>
            <LogIn className='h-10 w-10 text-yellow-500' />
            <h3 className='mt-4 text-lg font-semibold'>Manage Passwords</h3>
            <p className='text-center text-gray-600'>
              Easily edit and update admin and student passwords securely.
            </p>
          </div>
        </div>
      </div>

        {/* Testimonials Section */}
        <div className='w-full py-10 px-4 bg-blue-50'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-6'>
          What Our Users Say
        </h2>
        <div className='flex flex-col md:flex-row gap-6 justify-center items-start'>
          {/* Testimonial 1 */}
          <div className='bg-white p-6 shadow-md rounded-lg max-w-sm'>
            <p className='text-gray-600 italic'>
              "This platform has made managing attendance and payments so much easier. It's intuitive and efficient!"
            </p>
            <p className='mt-4 font-bold text-blue-500'>– Jane Doe, Student</p>
          </div>
          {/* Testimonial 2 */}
          <div className='bg-white p-6 shadow-md rounded-lg max-w-sm'>
            <p className='text-gray-600 italic'>
              "The real-time sign-in/out history is a game-changer for our school. Highly recommend it!"
            </p>
            <p className='mt-4 font-bold text-blue-500'>– Mr. Smith, Administrator</p>
          </div>
          {/* Testimonial 3 */}
          <div className='bg-white p-6 shadow-md rounded-lg max-w-sm'>
            <p className='text-gray-600 italic'>
              "Being able to track revenue and attendance in one place has been incredibly helpful for our admin team."
            </p>
            <p className='mt-4 font-bold text-blue-500'>– Dr. Johnson, Principal</p>
          </div>
        </div>
      </div>

      {/* Separator */}
      <Separator className='my-10' />

        <Footer/>
      </div>
    </>
  )
}

export default Page
