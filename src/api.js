import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchStudyPrograms = async () => {
  const response = await axios.get(`${API_BASE_URL}/studyprograms/`);
  return response.data;
};

export const fetchStudyProgram = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/studyprograms/${id}/`);
  return response.data;
};
