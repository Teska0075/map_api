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
  const { name, location, coordinates } = req.body;

  try {
    const restaurants = await Restaurant.create({
      name,
      location: { coordinates: [12, 13] },
    });

    res.status(200).json({ success: true, message: restaurants });
  } catch (error) {
    res.status(400).json({ success: false, err: error });
  }
};

module.exports = { getRestaurants, createRestaurants };
