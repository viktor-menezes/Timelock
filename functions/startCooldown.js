/**
 * Inicia um cooldown para um usuário em um comando específico.
 *
 * @param {string} userId - O ID do usuário para quem o cooldown será iniciado.
 * @param {string} command - O nome do comando para o qual o cooldown será aplicado.
 * @param {number} timeInSeconds - O tempo do cooldown em segundos.
 */

const cooldowns = new Map();

function startCooldown(userId, command, timeInSeconds) {
  const key = `${userId}-${command}`;
  const value = Date.now() + timeInSeconds * 1000;
  cooldowns.set(key, value);
}

module.exports = { startCooldown, cooldowns };
