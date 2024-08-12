import axios from "axios"

export const getdata = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error) {
      console.error('API call failed:', error);
    }
  };