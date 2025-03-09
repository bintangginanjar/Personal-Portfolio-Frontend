import axios from "axios";

const API_URL = "http://localhost:8080";

class ServiceService {
    getAll() {
        return axios.get(API_URL + '/api/services')
    }
}

export default new ServiceService();