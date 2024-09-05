import axios from 'axios';

// Define the function to update data
const updateData = async (id, updatedField) => {
    try {
 
        const response = await axios.put(`http://your-api-url.com/endpoint/${id}`, updatedField);

        console.log('Update successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating data:', error);
        throw error; 
    }
};

export default updateData;
