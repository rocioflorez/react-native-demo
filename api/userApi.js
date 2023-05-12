import axios from 'axios';

const API_URL = 'https://api.github.com';

export const fetchUsers = async () => {
  const response = await axios.get(`${API_URL}/users?per_page=10`);
  return response.data;
};
