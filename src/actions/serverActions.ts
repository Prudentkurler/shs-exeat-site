    //Create a server action component to post login data
    import {RegistrationInfo} from '@/Interface/Interface'




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