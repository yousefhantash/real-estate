import axios from "axios";
import { api } from "./ApiCreate";

const Get=async ()=>{
try{
const response=await api.get("/api/Property/GetAllProperties")
return response.data
}catch(error){
    
console.log("there is an error",error)
return null 
}
}
export default Get