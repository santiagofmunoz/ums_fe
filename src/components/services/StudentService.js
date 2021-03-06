import axios from 'axios';
const API_URL = "http://localhost:8000"

class StudentService {
    createStudent(student) {
        const url = `${API_URL}/api/person/create/`;
        return axios.post(url, student)
    }
}

export default StudentService;