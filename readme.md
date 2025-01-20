# Cooldown Package for Discord Bots

A simple and efficient cooldown package for Discord bots, written in JavaScript, to manage command cooldowns and prevent spam in your bot.

## Features

- **Start Cooldowns**: Set cooldowns for any user and command combination.
- **Check if Cooldown is Active**: Quickly check if a user is in cooldown for a specific command.
- **Get Remaining Cooldown Time**: Retrieve the remaining time for a user's cooldown.
- **Clear Cooldown**: Remove the cooldown for a specific user and command.
- **Clear All Cooldowns**: Remove all active cooldowns at once.

## Installation

To install the package, run the following command in your terminal:

```bash
npm install discord-cooldown
```

## Usage

### Exemple Usage

```js
const { startCooldown, isActive, getRemainingTime, clearCooldown, clearAllCooldowns } = require('discord-cooldown');

// Start a cooldown of 5 seconds for a user and a command
startCooldown('123', 'ping', 5);

// Check if the cooldown is active
if (isActive('123', 'ping')) {
    console.log('Cooldown is still active!');
} else {
    console.log('Cooldown has expired or is not set.');
}

// Get remaining cooldown time
console.log('Time remaining:', getRemainingTime('123', 'ping'), 'seconds');

// Clear the cooldown for a specific user and command
clearCooldown('123', 'ping');

// Clear all active cooldowns
clearAllCooldowns();
```

## Functions

**startCooldown(userId, command, timeInSeconds)**

Starts a cooldown for a specific user and command.

- **userId** (string): The ID of the user to apply the cooldown.

- **command** (string): The name of the command to apply the cooldown to.

- **timeInSeconds** (number): The cooldown time in seconds.


**isActive(userId, command)**

Checks if the cooldown is still active for a user and command.

- **userId** (string): The ID of the user.

- **command** (string): The name of the command.

- **Returns**: true if the cooldown is active, false otherwise.


**getRemainingTime(userId, command)**

Gets the remaining time of the cooldown for a user and command.

- **userId** (string): The ID of the user.

- **command** (string): The name of the command.

- **Returns**: The remaining cooldown time in seconds. Returns 0 if the cooldown has expired or doesn't exist.


**clearCooldown(userId, command)**

Clears the cooldown for a specific user and command.

- **userId** (string): The ID of the user.

- **command** (string): The name of the command.

- **Returns**: true if the cooldown was successfully removed, false if no cooldown was found.


**clearAllCooldowns()**

Removes all active cooldowns from the system.

## Why Use This Package?

This package is perfect for Discord bot developers who want an easy and reliable way to implement cooldowns for commands. It helps prevent spam by ensuring that users can't use the same command repeatedly in a short period, enhancing user experience and bot performance.

### Benefits:

- **Easy to Use**: Simple API to integrate with your bot.

- **Lightweight**: Designed to be fast and efficient.

- **Flexible**: Supports any command and any user.

Persistent: The cooldowns are stored in-memory, and can easily be adapted to use in databases.


## Contributing

We welcome contributions! If you'd like to improve this package, feel free to fork it and create a pull request. Here's how you can contribute:

1. Fork the repository


2. Create a new branch (git checkout -b feature/your-feature)


3. Make your changes


4. Commit your changes (git commit -am 'Add new feature')


5. Push to the branch (git push origin feature/your-feature)


6. Open a pull request

## License

This package is open-source and available under the [MIT License](./LICENSE)

## Contact

For questions, issues, or suggestions, feel free to reach out via GitHub issues or contact me at [victorramosjoaorocha@gmail.com.](mailto:victorramosjoaorocha@gmail.com.)
