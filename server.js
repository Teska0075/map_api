const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const colors = require("colors");
const app = express();
const connectDB = require("./config/mongodb");
const Neighborhood = require("./model/Neighborhood");
const restaurant = require("./model/Restaurant");
const restaurantRoutes = require("./Routes/restaurantRoutes");

const port = 8001;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());

app.use("/restaurants", restaurantRoutes);

app.get("/", async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find().limit(5);

    res.status(200).json({ success: true, message: neighborhoods });
  } catch (error) {
    res.status(400).json({ success: false, message: error });
  }
});

connectDB(MONGO_URI);
app.listen(port, () => {
  console.log(`Server aslaa port ${port}`.rainbow);
});
