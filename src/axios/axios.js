import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-ndurikhaecommclone.cloudfunctions.net/api", // The API (cloud function) URL
});

export default instance;
// Local for debugging: http://localhost:5001/ndurikhaecommclone/us-central1/api
