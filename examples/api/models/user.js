var Model    = require("./base/model");
var extend   = require("xtend/mutable");

/**
 */

function User(properties) {
  Model.call(this, properties);
}

/**
 */

extend(User.prototype, Model.prototype, {

});

module.exports = User;