const BASE_URL = "https://mb.staging.amazingtalker.com/"
const QUESTION_URL = BASE_URL + "question/"
const LOGIN_URL = BASE_URL + "api/session"
const userName = "finance@amazingtalker.com"
const userPWD = "Amazingtalker14"





const token = axios.post(LOGIN_URL, {
  username: userName,
  password: userPWD
});
