import { api } from './ApiCreate';

// Define the function to update data
const updateData = async (url) => {
    try {
 
        const response = await api.put(url);

        return response.data;
    } catch (error) {
        throw error; 
    }
};

export default updateData;
