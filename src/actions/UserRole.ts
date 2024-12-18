import { ICreateUserRole,IUserRole } from "@/Interface/UserRole";

//post userRole server action function

export const createUserRole = async(data:ICreateUserRole)=>{
    try {
        const response = await fetch('https://schoolexeat.fly.dev/userRole/',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }
        )
        if(!response){
            throw new Error('Failed to save data')
        }
        return response.json
    } catch (error) {
        console.log(error)
    }
}

//get all userRoles

export const getUserRoles = async()=>{
    try {

        const response = await fetch('https://schoolexeat.fly.dev/userRole/',
            {
                method:'GET',
                headers:{'Content-Type':'application/json'},
                
            }
        )

        if(!response){
             throw new Error('Failed to fetch data')
        }
        return response.json
        
    } catch (error) {
        console.log(error)
    }
}

//get a single userRole

export const getSingleUserRole = async(id:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/userRole/${id}`,
            {
                method:'GET',
                headers:{'Content-Type':'application/json'},
                
            }
        )

        if(!response){
             throw new Error('Failed to fetch data')
        }
        return response.json
        
    } catch (error) {
        console.log(error)
    }
}

//update userRole

export const updateUserRole = async(id:string,data:IUserRole)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/userRole/${id}`,
            {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            }
        )
        if(!response){
            throw new Error('Failed to update data')
        }
        return response.json

        
    } catch (error) {
        console.log(error)
    }
}

//delete userRole

export const deleteUserRole = async(id:string)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/userRole/${id}`,
            {
                method:'DELETE',
                headers:{'Content-Type':'application/json'},
                
            }
        )
        if(!response){
            throw new Error('Failed to delete data')
        }
        return response.json

        
    } catch (error) {
        console.log(error)
    }
}

//get userRole by role

export const getUserRoleByRole = async(role:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/userRole/role/${role}`,
            {
                method:'GET',
                headers:{'Content-Type':'application/json'},
                
            }
        )

        if(!response){
             throw new Error('Failed to fetch data')
        }
        return response.json
        
    } catch (error) {
        console.log(error)
    }
}

//get userRole by user

export const getUserRoleByUser = async(user:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/userRole/user/${user}`,
            {
                method:'GET',
                headers:{'Content-Type':'application/json'},
                
            }
        )

        if(!response){
             throw new Error('Failed to fetch data')
        }
        return response.json
        
    } catch (error) {
        console.log(error)
    }
}