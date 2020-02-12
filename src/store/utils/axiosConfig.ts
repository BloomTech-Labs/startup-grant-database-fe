import axios from 'axios';

const url = `${process.env.REACT_APP_CLIENT_BASEURL}`;

export const axiosWithOutAuth = () => axios.create({
    baseURL: url
});

export const axiosWithAuth = (token: string) => axios.create({
    baseURL: url,
    headers: {
        'Authorization': `Bearer ${token}`
    }
});
