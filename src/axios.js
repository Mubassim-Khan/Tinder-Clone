import axios from "axios"

const instance = axios.create({
    baseURL: "http://localhost:8001"    // Your deployed Back-End db link
})

export default instance;