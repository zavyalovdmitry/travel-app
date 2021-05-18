 module.exports = (app) => {
  const places = require('../controllers/place.controller.js');

  const router = require('express').Router();

  // Create a new Place
  router.post('/', places.create);

  // Retrieve all Places
  router.get('/', places.findAll);

  // Retrieve a single Place with id
  router.get('/:id', places.findOne);

  // Update a Place with id
  router.put('/:id', places.update);

  // Delete a Place with id
  router.delete('/:id', places.delete);

  // Delete all Places
  router.delete('/', places.deleteAll);

  app.use('/api/places', router);
};
