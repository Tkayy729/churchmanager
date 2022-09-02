const knex = require("knex");
const knexfile = require("./knexfile");
const { Model } = require("objection");

const setupDb = () => {
    const db = knex(knexfile.development);
    Model.knex(db);
    console.log(`connected to database`)
} 

module.exports = setupDb;