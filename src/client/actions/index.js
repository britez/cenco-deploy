
export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users/');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
  const res = await api.get('/current_user');

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  });
};

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, api) => {
  const res = await api.get('/admins');

  dispatch({
    type: FETCH_ADMINS,
    payload: res,
  });
};

export const FETCH_PROJECTS = 'fetch_projects';
export const fetchProjects = () => async (dispatch, getState, api) => {
  const res = await api.get('/projects');
  dispatch({
    type: FETCH_PROJECTS,
    payload: res,
  });
};

export const FETCH_PROJECT = 'fetch_project';
export const fetchProject = (id) => async (dispatch, getState, api) => {
  const res = await api.get(`/projects/${id}`);
  dispatch({
    type: FETCH_PROJECT,
    payload: res,
  });
};
