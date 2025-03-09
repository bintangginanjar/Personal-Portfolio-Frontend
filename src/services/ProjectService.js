import axios from "axios";

const API_URL = "http://localhost:8080";

class ProjectService {
    getAll() {
        return axios.get(API_URL + '/api/projects')
    }
}

export default new ProjectService();