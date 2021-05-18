/* eslint-disable class-methods-use-this */
import http from '../http-common';

class CountryDataService {
  create(data) {
    return http.post('/countries', data);
  }

  getAll() {
    return http.get('/countries');
  }

  get(id) {
    return http.get(`/countries/${id}`);
  }

  update(id, data) {
    return http.put(`/countries/${id}`, data);
  }

  delete(id) {
    return http.delete(`/countries/${id}`);
  }

  deleteAll() {
    return http.delete('/countries');
  }
}

export default new CountryDataService();
