import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { BadgeCheck, LogIn, TrendingUp } from 'lucide-react' // Using lucide-react icons for visuals
import { Separator } from '@/components/ui/separator'
import Footer from '@/components/comps/footer'

const Page = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[90vh] flex flex-col justify-center items-center gap-5 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400">
        <h1 className="text-3xl md:text-5xl w-[70%] text-center text-white font-extrabold leading-snug">
          Effortlessly Manage Exeat and Attendance with Ease
        </h1>
        <p className="mt-3 text-base md:text-lg text-white/90">
          Simplify the way schools and parents track attendance and manage exits.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5 lg:w-[300px] px-6 py-3 bg-white text-blue-600 rounded-2xl hover:shadow-xl transition-shadow duration-300"
        >
          Get Started
        </Button>
      </div>

      {/* Features Section */}
      <section className="w-full py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Features
        </h2>
        <div className="flex flex-wrap gap-6 justify-center px-6">
          {[
            { title: 'Easy registration and login', color: 'from-pink-400 to-red-400' },
            { title: 'Real-time sign-in/sign-out history', color: 'from-indigo-400 to-purple-400' },
            { title: 'Payment and fee tracking', color: 'from-green-400 to-teal-400' },
            { title: 'Parent communication tools', color: 'from-yellow-400 to-orange-400' },
          ].map((feature, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br ${feature.color} text-white w-full md:w-[22%] shadow-lg transform transition-transform hover:scale-105`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Learn more about how this feature can streamline your management.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center px-6">
          {[
            {
              icon: <BadgeCheck className="h-8 w-8" />,
              title: 'Register and Select Your School',
              description: 'Create an account and connect to your school for easy management.',
              bgColor: 'bg-blue-500',
            },
            {
              icon: <LogIn className="h-8 w-8" />,
              title: 'Login and Manage Your Details',
              description: 'Update your profile, sign in/out, and leave important messages.',
              bgColor: 'bg-green-500',
            },
            {
              icon: <TrendingUp className="h-8 w-8" />,
              title: 'Track Attendance and Payments',
              description: 'Stay informed about attendance and payment records in real-time.',
              bgColor: 'bg-yellow-500',
            },
          ].map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.bgColor} p-4 rounded-full text-white`}>{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Schools and Admins Section */}
      <section className="w-full py-16 bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          For Schools and Admins
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center px-6">
          {[
            {
              icon: <BadgeCheck className="h-10 w-10 text-blue-500" />,
              title: 'Track Records',
              description: 'Monitor students sign-in and sign-out records effortlessly.',
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-green-500" />,
              title: 'Generate Reports',
              description: 'View and download revenue reports for better financial management.',
            },
            {
              icon: <LogIn className="h-10 w-10 text-yellow-500" />,
              title: 'Manage Passwords',
              description: 'Easily edit and update admin and student passwords securely.',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
            >
              {item.icon}
              <h3 className="mt-4 text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-16 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          What Our Users Say
        </h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-start px-6">
          {[
            {
              quote:
                'This platform has made managing attendance and payments so much easier. It’s intuitive and efficient!',
              name: 'Jane Doe, Student',
            },
            {
              quote:
                'The real-time sign-in/out history is a game-changer for our school. Highly recommend it!',
              name: 'Mr. Smith, Administrator',
            },
            {
              quote:
                'Being able to track revenue and attendance in one place has been incredibly helpful for our admin team.',
              name: 'Dr. Johnson, Principal',
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg max-w-sm text-center">
              <p className="text-gray-600 italic">“{testimonial.quote}”</p>
              <p className="mt-4 font-bold text-blue-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-10" />

      <Footer />
    </>
  )
}

export default Page
