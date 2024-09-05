import { api } from './ApiCreate';

// Define the function to update data
const updateData = async (url) => {
    try {
 
        const response = await api.put(url);

        console.log('Update successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error; 
    }
};

export default updateData;
