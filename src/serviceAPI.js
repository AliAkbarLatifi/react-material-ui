import axios from 'axios';

const ServiceAPI = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://polls.apiblueprint.org/',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default ServiceAPI;
