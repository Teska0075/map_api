const Restaurant = require("../model/Restaurant");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().limit(5);

    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

const createRestaurants = async (req, res) => {
  const { name, long, lat } = req.body;

  try {
    const restaurants = await Restaurant.create({
      name,
      location: { coordinates: [long, lat] },
    });

    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, err: error });
  }
};

const deleteRestaurant = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurants = await Restaurant.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
};

const getNearBranch = async (req, res) => {
  console.log("POST");
  const { lon, lat } = req.body;
  const { distance } = req.query;

  console.log("POS-LON", lon);
  console.log("POS-LAT", lat);
  console.log("POS-LAT", req.query);

  try {
    const branches = await Restaurant.find({
      location: {
        $near: {
          $geometry: { type: "Point", coordinates: [lon, lat] },
          $maxDistance: distance,
        },
      },
    });
    res.status(200).json({ success: true, branches });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({ success: false, message: error });
  }
};

module.exports = {
  getRestaurants,
  createRestaurants,
  deleteRestaurant,
  getNearBranch,
};
