const router = require("express").Router();
const warehouseController = require("../controllers/warehouseController");

//getting all the warehouses because it is runnnin exports.index
router.route("/").get(warehouseController.index);

//getting one single warehouse because it is runnnin exports.singleWarehouse
router.route("/:id").get(warehouseController.singleWarehouse);

//get a list of inventory items that belong to a specific warehouse
//The job of a warehouses controller is to prepare information relating to a warehouse;
//so in this particular instance, since we are getting records related to warehouse,
//it should still be in warehouse controller, even though we are querying another table.
//which is what is happening below
router.route("/:id/inventories").get(warehouseController.warehouseInventories);

//Let's add the ability to add a warehouse
//it can be the same route as line 5 because it is a different HTTP request..
// this line 20 is a POST, not a GET
router.route("/").post(warehouseController.addWarehouse);

//editing a warehouse
router.route("/:id").put(warehouseController.updateWarehouse);

//delete
router.route("/:id").delete(warehouseController.updateWarehouse);

/* -------------------------------------------------------------------------- */
/*                  Below isthe cleaner way of doing the above                */
/* -------------------------------------------------------------------------- */

// router
//   .route('/')
//   .get(warehouseController.index)
//   .post(warehouseController.addWarehouse);

// router
//   .route('/:id')
//   .get(warehouseController.singleWarehouse)
//   .put(warehouseController.updateWarehouse);
//	 .delete(warehouseController.deleteWarehouse);

// router
//   .route('/:id/inventories')
//   .get(warehouseController.warehouseInventories);

module.exports = router;
