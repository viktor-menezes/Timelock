/**
 * Verifica se o cooldown ainda está ativo para um usuário e um comando específicos.
 *
 * @param {string} userId - O ID do usuário.
 * @param {string} command - O nome do comando.
 * @param {boolean} - Retorna `true` se o cooldown ainda estiver ativo, `false` caso contrário.
 */

const { cooldowns } = require("./startCooldown");

function isActive(userId, command) {
  const key = `${userId}-${command}`;
  const expires = cooldowns.get(key);

  if (!expires) return false;

  if (Date.now() > expires) {
    cooldowns.delete(key);
    return false;
  }

  return true;
}

module.exports = isActive;
