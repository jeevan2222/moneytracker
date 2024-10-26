import axios from 'axios';

const REACT_APP_BASE_URL = "https://expensive-lgia.onrender.com";

export const signIn = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/login`, data);
        return response?.data;

    } catch (error) {
      
        return error.response.data;
        console.log(error);
    }
};
export const getMoney = async (data) => {

    console.log(data);
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/trackmoney`, data);
        return response?.data;

    } catch (error) {
      
        return error.response.data;
        console.log(error);
    }
};
