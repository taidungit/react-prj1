
import axios from './axios.customize';
const createUserAPI = (fullName, email, password, phone) => {
  const URL_BACKEND = "/user";
  const data = {
    fullName: fullName,
    email: email,
    password: password,
    phone: phone
  };
  return axios.post(URL_BACKEND, data);
};

const getAllUsersAPI = () => {
  const URL_BACKEND = "/user";
  return axios.get(URL_BACKEND);
}
export { createUserAPI, getAllUsersAPI };