import axios from 'axios';
const API_URL = "http://localhost:8000"

class CareerService {
    createCareer(career) {
        const url = `${API_URL}/api/university/career/create`;
        return axios.post(url, career)
    }

    getCareers() {
        const url = `${API_URL}/api/university/career/`
        return axios.get(url)
    }
}

export default CareerService;