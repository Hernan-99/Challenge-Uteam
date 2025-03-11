const express = require("express");
const router = express.Router();

const usersCrontroller = require("../controllers/users.controller.js");

router
  .route("/users")
  .get(usersCrontroller.getAllUsers)
  .post(usersCrontroller.createUser)
  .put(usersCrontroller.updateAllDataUser);

router.route("/users/search").get(usersCrontroller.getUserByName);
// get by id - update patch
router
  .route("/users/:id")
  .get(usersCrontroller.getUserById)
  .delete(usersCrontroller.deleteUser)
  .patch(usersCrontroller.updateParcialDataUser);

module.exports = router;
