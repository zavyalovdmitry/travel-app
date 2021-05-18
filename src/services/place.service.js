/* eslint-disable class-methods-use-this */
import http from '../http-common';

class PlaceDataService {
  create(data) {
    return http.post('/places', data);
  }

  getAll() {
    return http.get('/places');
  }

  get(id) {
    return http.get(`/places/${id}`);
  }

  update(id, data) {
    return http.put(`/places/${id}`, data);
  }

  delete(id) {
    return http.delete(`/places/${id}`);
  }

  deleteAll() {
    return http.delete('/places');
  }
}

export default new PlaceDataService();
