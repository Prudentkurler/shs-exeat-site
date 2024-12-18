import { IParent } from "@/Interface/Parent";

//post parent server action function

export const createParent = async(data:IParent)=>{
    try {
        const response = await fetch('https://schoolexeat.fly.dev/parent/',
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

//get all parents

export const getParents = async()=>{
    try {

        const response = await fetch('https://schoolexeat.fly.dev/parent/',
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

//get a single parent

export const getSingleParent = async(id:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/parent/${id}`,
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

//update parent

export const updateParent = async(id:string,data:IParent)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/parent/${id}`,
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

//delete parent

export const deleteParent = async(id:string)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/parent/${id}`,
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