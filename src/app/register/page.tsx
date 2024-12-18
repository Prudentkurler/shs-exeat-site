"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Breadcrumb } from "@/components/ui/breadcrumb"; 
import { Loader2, Home, LogIn } from "lucide-react"; 
import { motion } from "framer-motion";
import Link from "next/link";
import { getSchools } from "@/actions/schoolActions";


const Register = () => {
  interface School {
    id: string;
    name: string;
  }
  
  const [schools, setSchools] = useState<School[]>([]);
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    region: "",
    school: "",
    photo: '',
    name: "",
    program: "",
    phone: "",
    email: "",
    residence: "",
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    guardianName: "",
    guardianPhone: "",
    guardianEmail: "",
    yourPhone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value,
    }));
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.region && formData.school;
      case 2:
        return (
          formData.photo &&
          formData.name &&
          formData.program &&
          formData.phone &&
          formData.email &&
          formData.residence
        );
      case 3:
        return formData.parentName && formData.parentPhone && formData.parentEmail;
      default:
        return true;
    }
  };

  const router = useRouter(); 

  const nextStep = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setStep((prev) => Math.min(prev + 1, 4)); 
  };

  const prevStep = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setStep((prev) => Math.max(prev - 1, 1)); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep()) {
        alert("Please fill in all required fields before submitting.");
        return;
    }

    setSubmitting(true);

    try {
        const registrationData = {
            studentName: formData.name,
            studentPhone: formData.phone,
            studentSchool: formData.school, 
            studentCourse: formData.program,
            parentName: formData.parentName,
            parentPhone: formData.parentPhone,
            parentEmail: formData.parentEmail,
            guardianName: formData.guardianName,
            guardianPhone: formData.guardianPhone,
            guardianEmail: formData.guardianEmail,
            yourPhone: formData.yourPhone,
        };

      

        const formPayload = new FormData();
        formPayload.append('studentName', registrationData.studentName);
        formPayload.append('studentPhone', registrationData.studentPhone);
        formPayload.append('studentSchool', registrationData.studentSchool);
        formPayload.append('studentCourse', registrationData.studentCourse);
        formPayload.append('parentName', registrationData.parentName);
        formPayload.append('parentPhone', registrationData.parentPhone);
        formPayload.append('parentEmail', registrationData.parentEmail);
        formPayload.append('guardianName', registrationData.guardianName);
        formPayload.append('guardianPhone', registrationData.guardianPhone);
        formPayload.append('guardianEmail', registrationData.guardianEmail);
        formPayload.append('yourPhone', registrationData.yourPhone);

        const response = await fetch('https://schoolexeat.fly.dev/register', {
            method: 'POST',
            body: formPayload,
        });

        if (response) {
          const id = generateUniqueId();
          const pin = generatePin();
            alert(`Registration completed! Your ID is ${id} and your pin is ${pin}`);
        
            router.push("/login/exeat");
        } else {
            alert("Registration failed. Please try again.");
        }
    } catch (error) {
        console.error('Failed to save data', error);
        alert("An error occurred. Please try again.");
    } finally {
        setSubmitting(false);
    }
};

//generate unique id 8 digits
const generateUniqueId = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

//generate pin 4 digits

const generatePin = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};




//get the schools 
const handleSchools = async()=>{

  try {
    const res = await getSchools();
    setSchools(res);
    const schools = res;
  } catch (error) {
    console.error('Failed to fetch schools', error);
  }

}

handleSchools();

  return (
    <div className="w-full min-h-screen bg-first flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl"
      >
        <Card className="bg-white p-6 shadow-lg rounded-lg">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-center text-blue-600 mb-6"
          >
            Register
          </motion.h2>

          <Breadcrumb className="mb-6">
            <span>Step {step} of 4</span>
            <span className="mx-2">/</span>
            {step === 1 && <span>Region & School</span>}
            {step === 2 && <span>Student Details</span>}
            {step === 3 && <span>Parent Details</span>}
            {step === 4 && <span>ID & Pin Info</span>}
          </Breadcrumb>

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <div>
                <div className="mb-4">
                  <Label htmlFor="region">Select Region</Label>
                  <Select name="region" required onValueChange={(value) => setFormData({...formData, region: value})}>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Choose a region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="awa">Ashanti</SelectItem>
                      <SelectItem value="bgr">Brong-Ahafo</SelectItem>
                      <SelectItem value="cpt">Central</SelectItem>
                      <SelectItem value="eastern">Eastern</SelectItem>
                      <SelectItem value="gt">Greater Accra</SelectItem>
                      <SelectItem value="northern">Northern</SelectItem>
                      <SelectItem value="ot">Oti</SelectItem>
                      <SelectItem value="savanna">Savannah</SelectItem>
                      <SelectItem value="volta">Volta</SelectItem>
                      <SelectItem value="western">Western</SelectItem>
                      <SelectItem value="western-north">Western North</SelectItem>
                      <SelectItem value="upper-west">Upper West</SelectItem>
                      <SelectItem value="upper-east">Upper East</SelectItem>
                      <SelectItem value="north-east">North East</SelectItem>
                      <SelectItem value="ajua">Ahafo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="school">Select Your School</Label>
                  <Select name="school" value={formData.school} required onValueChange={(value) => setFormData({...formData, school: value})}>
                    <SelectTrigger id="school">
                      <SelectValue placeholder="Choose your school" />
                    </SelectTrigger>
                    <SelectContent>
                      {schools.map((school) => (
                        <SelectItem key={school.id} value={school.id}>
                          {school.name} Anglican
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                 
                </div>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="mb-4">
                  <Label htmlFor="photo">Upload Photo</Label>
                  <Input name="photo" required type="file" id="photo" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input name="name" value={formData.name} required id="name" placeholder="Enter your name" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="program">Program</Label>
                  <Input name="program" value={formData.program} required id="program" placeholder="Enter your program" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input name="phone" value={formData.phone} required id="phone" type="tel" placeholder="Enter your phone" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" value={formData.email} required id="email" type="email" placeholder="Enter your email" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="residence">Residence</Label>
                  <Input name="residence" value={formData.residence} required id="residence" placeholder="Enter your residence" onChange={handleInputChange} />
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div>
                  <Label htmlFor="parentName">Parent Name</Label>
                  <Input name="parentName" value={formData.parentName} required id="parentName" placeholder="Enter parent name" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="parentPhone">Parent Phone</Label>
                  <Input name="parentPhone" value={formData.parentPhone} required id="parentPhone" type="tel" placeholder="Enter parent phone" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="parentEmail">Parent Email</Label>
                  <Input name="parentEmail" value={formData.parentEmail} required id="parentEmail" type="email" placeholder="Enter parent email" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="guardianName">Guardian Name</Label>
                  <Input name="guardianName" value={formData.guardianName} id="guardianName" placeholder="Enter guardian name" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="guardianPhone">Guardian Phone</Label>
                  <Input name="guardianPhone" value={formData.guardianPhone} id="guardianPhone" type="tel" placeholder="Enter guardian phone" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="guardianEmail">Guardian Email</Label>
                  <Input name="guardianEmail" value={formData.guardianEmail} id="guardianEmail" type="email" placeholder="Enter guardian email" onChange={handleInputChange} />
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div>
                  <Label htmlFor="yourPhone">Your Phone Number</Label>
                  <Input name="yourPhone" value={formData.yourPhone} id="yourPhone" type="tel" placeholder="Enter your phone number" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="parentPhone">Parent Phone Number</Label>
                  <Input name="parentPhone" value={formData.parentPhone} id="parentPhone" type="tel" placeholder="Enter parent phone number" onChange={handleInputChange} />
                </div>
                <div>
                  <Label htmlFor="guardianPhone">Guardian Phone Number</Label>
                  <Input name="guardianPhone" value={formData.guardianPhone} id="guardianPhone" type="tel" placeholder="Enter guardian phone number" onChange={handleInputChange} />
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button variant="secondary" onClick={prevStep}>
                  Back
                </Button>
              )}
              {step < 4 ? (
                <Button variant="default" onClick={nextStep}>
                  Next
                </Button>
              ) : (
                <Button type="submit" variant="default" disabled={submitting}>
                  {submitting ? <Loader2 className="animate-spin h-5 w-5" /> : "Submit"}
                </Button>
              )}
            </div>
          </form>

          <div className="flex justify-between mt-6">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2">
                <Home className="w-4 h-4" /> Back Home
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="flex items-center gap-2">
                <LogIn className="w-4 h-4" /> Login
              </Button>
            </Link>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
