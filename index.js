const { startCooldown } = require("./functions/startCooldown.js");
const isActive = require("./functions/isActive.js");
const getRemainingTime = require("./functions/getRemainingTime.js");

module.exports = {
  startCooldown,
  isActive,
  getRemainingTime,
};
