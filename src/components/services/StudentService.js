import axios from 'axios';
const API_URL = "http://localhost:8000"

class StudentService {
    createStudent(personPk) {
        const url = `${API_URL}/api/person/create/`;
        return axios.post(url, personPk)
    }
}

export default StudentService;