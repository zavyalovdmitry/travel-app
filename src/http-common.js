import axios from 'axios';

const addr = 'https://zavyalovdmitry-travel-app.herokuapp.com';

export default axios.create({
  baseURL: `${addr}/api`,
  headers: {
    'Content-type': 'application/json'
  }
});

// const addr = 'http://localhost:8081';

// export default axios.create({
//   baseURL: `${addr}/api`,
//   headers: {
//     'Content-type': 'application/json'
//   }
// });
