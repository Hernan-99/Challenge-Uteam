const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies.controller.js");

router
  .route("/users/:id/movies")
  .get(moviesController.getMoviesByUser)
  .post(moviesController.createMovieToUser)
  .delete(moviesController.deleteMovieFromUser);

module.exports = router;
