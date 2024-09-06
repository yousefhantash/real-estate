import { api } from "./ApiCreate";

const Delete=async (url)=>{
    try{

        const rspo= await api.delete(url)
    }
catch(error){}

}

export default Delete