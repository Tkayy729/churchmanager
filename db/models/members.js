const { Model } = require("objection");

module.exports = class Members extends Model {
  static get tableName() {
    return "members";
  }

  static get relationMappings() {
    return {
      group_members: {
        relation: Model.HasManyRelation,
        modelClass: require("../models/group_members"),
        join: {
          from: "members.id",
          to: "group_members.memberId",
        },
      },
    };
  }
};
