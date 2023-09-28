import axios from 'axios';

// const handleResponse = (response) => {
// 	const res = response?.data?.response ?? {};
// 	return res.error ? Promise.reject(res.error) : res;
// };
const handleError = (error) => Promise.reject(error.message || error);


export const getEmployeesApi = () => {
	const path = `https://reqres.in/api/users`;
	return axios
		.get(path)
		.then((response) => {
      const data = response?.data ?? {};
			return data.response?.error ? Promise.reject(data.response?.error) : data;
		})
		.catch(handleError);
};
