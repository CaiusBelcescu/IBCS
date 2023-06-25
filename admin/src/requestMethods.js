import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzFmOWYyZWM1YTNkZTk3Nzg1YmMwOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NTk2MjQ0OCwiZXhwIjoxNjg2MjIxNjQ4fQ.CYN5NaDgdKrD-CNCpCDsUeSY9QIzt-6MeVzJHX-sW7I";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
