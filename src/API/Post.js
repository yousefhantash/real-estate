import { api } from "./ApiCreate";

const Post = async (url, data) => {
  try {
    const { status } = await api.post(url, data, {
      headers: {
      },
    });
    return status; 
  } catch (error) {
    return 500; 
  }
};

export default Post;
