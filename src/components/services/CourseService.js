import axios from 'axios';
const API_URL = "http://localhost:8000"

class CourseService {
    createCourse(course) {
        const url = `${API_URL}/api/university/course/create`;
        return axios.post(url, course)
    }
}

export default CourseService;