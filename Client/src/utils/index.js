import axios from 'axios';

const axiosInstance = axios.create({})

export const axiosAdvanced = async ({ method, baseUrl, data, headers } ) => {
    const config = {
        method,
        baseUrl,
        data,
        headers
    }

    try {
        const res = await axiosInstance(config);

        return res;
    }
    catch(err) {
        console.log(err.message);
        return err;
    }
}