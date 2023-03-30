const { Router } = require("express");
const {
  getRestaurants,
  createRestaurants,
} = require("../controllers/restaurantController");

const router = Router();

router.route("/").get(getRestaurants).post(createRestaurants);

module.exports = router;
