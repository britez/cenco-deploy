import express from 'express';
import projects from '../services/projects';

const api = express.Router();

api.get('/projects', (req, res) => {
  projects.getProjects().then(resp => res.status(200).json(resp.data));
})

api.get('/projects/:id', (req, res) => {
  projects.getProject(req.params.id).then(resp => res.status(200).json(resp.data));
})

export default api;
