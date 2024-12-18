import { School } from "@/app/super-admin-dashboard/admin-edit/page";

//post school server action function

export async function addSchool(prevState: any, formData: FormData) {
    try {
      // Extract payload
      const payload = {
        name: formData.get("name"),
        code: formData.get("code"),
        region_id: formData.get("region_id"),
        address: formData.get("address"),
      };
  
      console.log("Payload being sent:", payload); // Debugging
  
      const response = await fetch("https://schoolexeat.fly.dev/school/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData); // Debugging
        throw new Error(errorData.message || "Failed to add school.");
      }
  
      return { success: true, message: "School added successfully!" };
    } catch (error: any) {
      console.error("Add school error:", error.message); // Debugging
      return { success: false, error: error.message };
    }
  }

//get all schools

export const getSchools = async()=>{
    try {

        const response = await fetch('https://schoolexeat.fly.dev/school/',
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



//get a single school

export const getSingleSchool = async(id:string)=>{
    try {

        const response = await fetch(`https://schoolexeat.fly.dev/school/${id}`,
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

//update school

export const updateSchool = async(id:string,data:School)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/school/${id}`,
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

//delete school

export const deleteSchool = async(id:string)=>{
    try {
        const response = await fetch(`https://schoolexeat.fly.dev/school/${id}`,
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