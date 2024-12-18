    //Create a server action component to post login data
    import {RegistrationInfo} from '@/Interface/Interface'


    export const registerUser = async (data: FormData)=>{
        const name = data.get('name')?.toString()
        const email = data.get('email')?.toString()
        const password = data.get('password')?.toString()
        const phone = data.get('phone')?.toString()
        const address = data.get('address')?.toString()
        const studentSchool = data.get('studentSchool')?.toString()
        const studentCourse = data.get('studentCourse')?.toString()
        const parentName = data.get('parentName')?.toString()
        const parentPhone = data.get('parentPhone')?.toString()
        const parentEmail = data.get('parentEmail')?.toString()
        const guardianName = data.get('guardianName')?.toString()
        const guardianPhone = data.get('guardianPhone')?.toString()
        const guardianEmail = data.get('guardianEmail')?.toString()
        const yourPhone = data.get('yourPhone')?.toString()

        if(!name || !email || !password || !phone || !address || !studentSchool || !studentCourse || !parentName || !parentPhone || !parentEmail || !guardianName || !guardianPhone || !guardianEmail || !yourPhone){
            return
        }

        const registrationData:RegistrationInfo = {
            studentName: name,
            studentAge: data.get('studentAge')?.toString() || '',
            studentPhone: phone,
            studentSchool: studentSchool,
            studentCourse: studentCourse,
            parentName: parentName,
            parentPhone: parentPhone,
            parentEmail: parentEmail,
            guardianName: guardianName,
            guardianPhone: guardianPhone,
            guardianEmail: guardianEmail,
            yourPhone: yourPhone
        }



        try {
            const response = await fetch('https://schoolexeat.fly.dev/student/',
            {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(registrationData)
            }
            )
            if(!response.ok){
                throw new Error('Failed to save data')
            }
            return response.json()
        } catch (error) {
            console.log(error)
        }
    }

    //getallstudents
    export const getStudents = async()=>{
        try {

            const response = await fetch('https://schoolexeat.fly.dev/student/',
                {
                    method:'GET',
                    headers:{'Content-Type':'application/json'},
                   
                                        
                }
            )

            if(!response){
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            return data        
        } catch (error) {
            console.log(error)
        }
    }

     export const students = await getStudents()
     


    //get a single student
    export const getSingleUser = async(id:string)=>{
        try {

            const response = await fetch(`https://schoolexeat.fly.dev/student/${id}`,
                {
                    method:'GET',
                    headers:{'Content-Type':'application/json'},
                    
                }
            )

            if(!response){
                throw new Error('Failed to fetch data')
            }
            const data = await response.json()
            
        } catch (error) {
            console.log(error)
        }
    }

    //update a student
    export const updateStudent = async(id:string,data:RegistrationInfo)=>{
        try {
            const response = await fetch(`https://schoolexeat.fly.dev/student/${id}`,
                {
                    method:'PUT',
                    headers:{'Content-Type':'application/json'},
                }
            )
            if(!response){
                throw new Error('Failed to update data')
            }
            const data = await response.json()

            
        } catch (error) {
            console.log(error)
        }
    }

    //delete a student
    export const deleteStudent = async(id:string)=>{
        try {
            const response = await fetch(`https://schoolexeat.fly.dev/student/${id}`,
                {
                    method:'DELETE',
                    headers:{'Content-Type':'application/json'},
                    
                }
            )

            if(!response){
                throw new Error('Failed to delete data')
            }
            return 'Data deleted successfully'
            
        } catch (error) {
            console.log(error)
        }
    }