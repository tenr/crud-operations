const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
  //this gets all the data from the inventory table in a JS promise
  knex("inventory")
    //now that we have the promise with the data... give it to me in json and send status of 200
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Inventories: ${err}`)
    );
};
