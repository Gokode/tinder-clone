import axios from "axios";

const instance = axios.create({
    baseURL:"https://tinder-backend-gokul.herokuapp.com",
});

export default instance;