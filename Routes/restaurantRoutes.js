const { Router } = require("express");
const {
  getRestaurants,
  createRestaurants,
  deleteRestaurant,
} = require("../controllers/restaurantController");

const router = Router();

router.route("/").get(getRestaurants).post(createRestaurants);
router.route("/:id").delete(deleteRestaurant);

module.exports = router;
