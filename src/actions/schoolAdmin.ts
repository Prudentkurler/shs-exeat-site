import { ICreateSchoolAdmin, IUpdateSchoolAdmin,ISchoolAdminDashboard } from "@/Interface/SchoolAdmin";

//post schoolAdmin server action function

"use server";

export async function addSchoolAdmin(prevState: any, formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const password = formData.get("password");

    // Payload to match backend schema
    const payload = {
      name,
      email,
      phone,
      user_type: "school_admin", // Static value
      school_id: 0, // Replace this if you dynamically fetch or pass the school_id
      password, // Assuming password field exists in backend
    };

    const response = await fetch("https://schoolexeat.fly.dev/school_admin/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { success: false, error: errorData.message || "Failed to add admin" };
    }

    const result = await response.json();
    return { success: true, message: "Admin added successfully", data: result };
  } catch (error) {
    return { success: false, error: "An unexpected error occurred" };
  }
}

//get all schoolAdmins

export const getSchoolAdmins = async()=>{
    try {

        const response = await fetch('https://schoolexeat.fly.dev/schoolAdmin/',
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

//get a single schoolAdmin

export const getSingleSchoolAdmin = async(id:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/schoolAdmin/${id}`,
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

//update schoolAdmin server action function

export const updateSchoolAdmin = async(data:IUpdateSchoolAdmin)=>{
    try {
        const response = await fetch('https://schoolexeat.fly.dev/schoolAdmin/',
        {
            method:'PUT',
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

//delete schoolAdmin server action function

export const deleteSchoolAdmin = async(id:string)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/schoolAdmin/${id}`,
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

//get schoolAdmin dashboard

export const getSchoolAdminDashboard = async(id:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/schoolAdmin/${id}/dashboard`,
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

