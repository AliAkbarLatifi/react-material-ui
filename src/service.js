import axios from 'axios';

const Service = axios.create({
    baseURL: 'https://polls.apiblueprint.org',
    headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default Service;
