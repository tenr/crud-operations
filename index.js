const express = require("express");
const app = express();
const PORT = process.env.PORT || 5050;

//We need middleware to be able to POST/CREATE
//When you post a Json file, this line 8 allows you to do that
app.use(express.json());

const inventoryRoutes = require("./routes/inventoryRoute");
const warehouseRoutes = require("./routes/warehouseRoute");

app.use("/inventories", inventoryRoutes);

app.use("/warehouses", warehouseRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
