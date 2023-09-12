import Api from "./api";

export const getDemoApi = async () => {
  const base_url = 'https://api.github.com/repos/tannerlinsley/react-query'
  try {
    const response = await Api.get(base_url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
