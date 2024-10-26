import axios from 'axios';

const REACT_APP_BASE_URL = "https://expensive-lgia.onrender.com";

export const signIn = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/login`, data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response?.data;

    } catch (error) {
        console.error(error);  // It's best to log the error first
        return error.response?.data;
    }
};

export const getMoney = async (data) => {
    console.log(data);
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/trackmoney`, data, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        return response?.data;

    } catch (error) {
        console.error(error);  
        return error.response?.data;
    }
};
