import Service from 'serviceAPI';

const API = {};

API.getEntryPoint = () => {
    return Service.get('/');
};

export default API;
