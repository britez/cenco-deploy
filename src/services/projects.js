import axios from 'axios';

const BASE_URL = 'http://localhost:3000'
const getProjects = () => axios.get(`${BASE_URL}/projects/`);
const getProject = id => axios.get(`${BASE_URL}/projects/${id}`);

export default { getProjects, getProject }
