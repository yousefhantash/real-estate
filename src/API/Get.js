import { api } from "./ApiCreate";

const Get=async (data)=>{
try{
const response=await api.get(data)
console.log(response.data)

return response.data

}catch(error){
    
console.log("there is an error",error)
return null 
}
}

export default Get