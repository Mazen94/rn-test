import axios, { AxiosResponse } from 'axios';

//get method
export const get = async <T>(url: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};
