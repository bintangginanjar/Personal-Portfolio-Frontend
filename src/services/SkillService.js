import axios from "axios";

const API_URL = "http://localhost:8080";

class SkillService {
    getAll() {
        return axios.get(API_URL + '/api/skills')
    }
}

export default new SkillService();