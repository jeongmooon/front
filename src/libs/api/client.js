import axios from "axios";

const client = axios.create();

client.defaults.baseURL =
  "http://ec2-3-36-37-137.ap-northeast-2.compute.amazonaws.com/";

export default client;
