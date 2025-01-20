/**
 * Remove todos os cooldowns registrados.
 *
 * @returns {void} - Não retorna nada.
 */

const { cooldowns } = require("./startCooldown");

function clearAllCooldowns() {
  cooldowns.clear();
}

module.exports = clearAllCooldowns;
