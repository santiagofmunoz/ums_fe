import axios from 'axios';
const API_URL = "http://localhost:8000"

class AdministrativeService {
    createAdministrative(administrative) {
        const url = `${API_URL}/api/person/create/`;
        return axios.post(url, administrative)
    }
}

export default AdministrativeService;