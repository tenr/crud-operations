// import seed data files, arrays of objects
const inventoryData = require("../seed_data/inventory");
const warehouseData = require("../seed_data/warehouse");

exports.seed = function (knex) {
  return knex("warehouse")
    .del()
    .then(function () {
      //after you delete eveyrthng, go to the database again and insert the warehouseData, an  array of objects
      //the warehouseData is the seed.. go ahead and command + click that variable and youll see the data
      return knex("warehouse").insert(warehouseData);
    })
    .then(() => {
      return knex("inventory").del();
    })
    .then(() => {
      return knex("inventory").insert(inventoryData);
    });
};
