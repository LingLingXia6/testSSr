import axios from "axios";
const createAxiosInstance = axios.create({
  baseURL: 'https://service-i78emjc8-1301518990.gz.tencentapigw.com.cn',
})
export default createAxiosInstance;