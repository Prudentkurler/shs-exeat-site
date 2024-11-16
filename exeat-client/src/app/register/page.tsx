"use client"
import { useState } from "react"
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Loader2 } from "lucide-react" // Spinner icon

const Register = () => {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false) // Loading state for steps
  const [submitting, setSubmitting] = useState(false) // Loading state for submit

  // Handler to navigate steps
  const nextStep = async (e: React.MouseEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setStep((prev) => Math.min(prev + 1, 3))
    }, 1000) // Simulate loading
  }

  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault()
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      alert("Form submitted successfully!") // Simulate form submission
    }, 2000)
  }

  return (
    <div className="w-full min-h-screen bg-gray-200 flex justify-center items-center">
      <Card className="w-full max-w-lg bg-white p-6">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>

        {/* Step Indicator */}
        <div className="text-center mb-4">
          <p className="text-sm text-gray-600">Step {step} of 3</p>
        </div>

        {/* Step Content */}
        <form onSubmit={handleSubmit}>
          {loading ? (
            // Skeleton Loader for loading state
            <div className="space-y-4">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          ) : (
            <>
              {step === 1 && (
                <div className="space-y-4">
                  {/* Step 1: Region and School */}
                  <div>
                    <Label htmlFor="region">Select Region</Label>
                    <Select>
                      <SelectTrigger id="region">
                        <SelectValue placeholder="Choose your region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="north">North</SelectItem>
                        <SelectItem value="south">South</SelectItem>
                        <SelectItem value="east">East</SelectItem>
                        <SelectItem value="west">West</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="school">Select Your School</Label>
                    <Select>
                      <SelectTrigger id="school">
                        <SelectValue placeholder="Choose your school" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="school1">School 1</SelectItem>
                        <SelectItem value="school2">School 2</SelectItem>
                        <SelectItem value="school3">School 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  {/* Step 2: Student Details */}
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="program">Program</Label>
                    <Input id="program" placeholder="Enter your program" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  {/* Step 3: Parent Details */}
                  <div>
                    <Label htmlFor="parentName">Parent Name</Label>
                    <Input id="parentName" placeholder="Enter parent name" />
                  </div>
                  <div>
                    <Label htmlFor="parentPhone">Parent Phone</Label>
                    <Input
                      id="parentPhone"
                      type="tel"
                      placeholder="Enter parent phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="parentEmail">Parent Email</Label>
                    <Input
                      id="parentEmail"
                      type="email"
                      placeholder="Enter parent email address"
                    />
                  </div>
                </div>
              )}
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button variant="secondary" onClick={prevStep} disabled={loading}>
                Back
              </Button>
            )}
            {step < 3 ? (
              <Button
                variant="default"
                onClick={nextStep}
                disabled={loading || submitting}
              >
                {loading ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  "Next"
                )}
              </Button>
            ) : (
              <Button
                type="submit"
                variant="default"
                disabled={submitting || loading}
              >
                {submitting ? (
                  <Loader2 className="animate-spin h-5 w-5" />
                ) : (
                  "Submit"
                )}
              </Button>
            )}
          </div>
        </form>
      </Card>
    </div>
  )
}

export default Register
