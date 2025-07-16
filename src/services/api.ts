import axios from "axios";

const api = axios.create({
    //baseURL: 'http://192.168.15.8:3333'
    //baseURL: 'http://10.0.2.2:3333'
    baseURL: 'https://tasklist-backend-blond.vercel.app/'
})

export { api };