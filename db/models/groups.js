const { Model } = require("objection");

module.exports = class Members extends Model {
  static get tableName() {
    return "groups";
  }
};
