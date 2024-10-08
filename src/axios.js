import axios from 'axios';

const axiosInstance = axios.create(
	{ baseURL: process.env.REACT_APP_API_URL }
);

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => Promise.reject((error.response && error.response.data) || 'Something went wrong!')
);

// axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axiosInstance;
