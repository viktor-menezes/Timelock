/**
 * Retorna o tempo restante de um cooldown para um usuário e comando específicos.
 *
 * @param {string} userId - O ID do usuário para quem o cooldown será iniciado.
 * @param {string} command - O nome do comando para o qual o cooldown será aplicado.
 * @returns {number} - O tempo restante em segundos. Se o cooldown já expirou ou não existir, retorna `0`.
 */

const { cooldowns } = require("./startCooldown");

function getRemainingTime(userId, command) {
  const key = `${userId}-${command}`;
  const expires = cooldowns.get(key);

  if (!expires) return 0;

  return Math.max(0, Math.floor((expires - Date.now()) / 1000));
}

module.exports = getRemainingTime;
