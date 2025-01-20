/**
 * Remove o cooldown de um usuário para um comando específicos.
 *
 * @param {string} userId - O ID do usuário para quem o cooldown será iniciado.
 * @param {string} command - O nome do comando para o qual o cooldown será aplicado.
 * @returns {boolean} - Retorna `true` se o cooldown foi removido com sucesso, `false` caso contrário.
 */

const { cooldowns } = require("./startCooldown");

function clearCooldown(userId, command) {
  const key = `${userId}-${command}`;
  return cooldowns.delete(key);
}

module.exports = clearCooldown;
