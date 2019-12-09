import Service from 'service';

const API = {};

API.getEntryPoint = () => {
    return Service.get(process.env.API_URL);
};

export default API;
