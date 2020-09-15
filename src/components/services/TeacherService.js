import axios from 'axios';
const API_URL = "http://localhost:8000"

class TeacherService {
    createTeacher(teacher) {
        const url = `${API_URL}/api/person/create/`;
        return axios.post(url, teacher)
    }
}

export default TeacherService;