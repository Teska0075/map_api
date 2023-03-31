const { Router } = require("express");
const {
  getRestaurants,
  createRestaurants,
  deleteRestaurant,
  getNearBranch,
} = require("../controllers/restaurantController");

const router = Router();

router.route("/near").post(getNearBranch);
router.route("/").get(getRestaurants).post(createRestaurants);
router.route("/:id").delete(deleteRestaurant);

module.exports = router;
