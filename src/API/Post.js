import { api } from "./ApiCreate";

const Post = async (url, data) => {
  try {
    const { status } = await api.post(url, data, {
      headers: {
      },
    });
    return status; 
  } catch (error) {
    console.error("Error in POST request:", error);
    return 500; 
  }
};

export default Post;
