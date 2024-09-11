import axios from "axios"

export const getdata = async () => {
    try {
      const response = await axios.get('');
      return response.data.products;
    } catch (error) {
    }
  };
