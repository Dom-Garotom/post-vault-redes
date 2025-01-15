import axios from "axios";


export const PostApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type" : "application-json"
    }
})