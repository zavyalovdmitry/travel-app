import axios from 'axios';

// ============ local server ============
// const PORT = 8081;
// const addr = 'http://localhost';
// /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\

// ============ deploy ============
const PORT = process.env.PORT || 8081;
const addr = 'https://super-best-travel-app.herokuapp.com'
// /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ /\ 

export default axios.create({

  // baseURL: 'http://localhost:8081/api',
  baseURL: `${addr}:${PORT}/api`,
  headers: {
    'Content-type': 'application/json',
  },
});
