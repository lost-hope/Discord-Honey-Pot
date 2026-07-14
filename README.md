# Discord-Honey-Pot 🍯

A Discord.js bot that acts as a honeypot to automatically detect and ban spam bots. The bot monitors a designated "honeypot" channel and instantly bans any user who posts in it, as legitimate users should never interact with this hidden channel.

## Purpose 🎯

This bot helps server administrators combat spam bots by:
- Creating a trap channel that legitimate users won't access
- Automatically banning any user who posts in the honeypot channel
- Logging all ban actions for review and analysis
- Cleaning up spam messages from the past 7 days

## How It Works ⚙️

1. The bot monitors a specific channel designated as the honeypot
2. When any user sends a message in that channel, they are immediately banned
3. The ban action, user information, message content, and server name are logged to `log.txt`
4. Messages from the banned user in the past 7 days are automatically deleted

## Prerequisites 📋

- Node.js (v16.9.0 or higher)
- A Discord Bot account with the following permissions:
  - Ban Members
  - Read Messages/View Channels
  - Read Message History
- Bot intents enabled in Discord Developer Portal:
  - No privileged intents are required for this bot

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Discord-Honey-Pot.git
cd Discord-Honey-Pot
```

2. Install dependencies:
```bash
npm install
```

3. Create a configuration file:
```bash
cp config.json.example config.json
```

4. Edit `config.json` with your bot credentials:
```json
{
    "token": "your-bot-token-here",
    "channelID": "honeypot-channel-id",
    "serverid": "your-server-id"
}
```

## Configuration ⚙️

Edit the [config.json](config.json) file with the following values:

- `token`: Your Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)
- `channelID`: The ID of the channel you want to use as a honeypot (right-click channel → Copy ID)
- `serverid`: Your Discord server ID (right-click server → Copy ID)

**Important:** Make sure the honeypot channel is accessible to everyone, but add a message explaining the purpose of that channel before turning on the bot.

## Usage 💻

1. Start the bot:
```bash
node index.js
```

2. When the bot is ready, you'll see:
```
Ready! Logged in as YourBotName#1234
```

3. The bot will now monitor the specified channel and automatically ban users who post in it.

## Logging 📝

All ban actions are logged to `log.txt` in the root directory with the following information:
- Banned user's tag
- Channel ID that triggered the ban
- Server name

## Security Best Practices 🔒

- **Never commit** your `config.json` file (it's already in [.gitignore](.gitignore))
- Keep your bot token secret
- Regularly review the `log.txt` file for false positives
- Set appropriate channel permissions so legitimate users cannot see the honeypot channel
- Consider using role-based restrictions to hide the channel from new members

## Troubleshooting 🔧

**Bot doesn't ban users:**
- Verify the bot has "Ban Members" permission
- Ensure the bot's role is higher than the roles of users you want to ban
- Check that `channelID` and `serverid` in [config.json](config.json) are correct

**"Missing Permissions" error:**
- Make sure the bot has Administrator permission or at least Ban Members permission
- Verify the bot's role hierarchy

**Bot doesn't respond:**
- Verify your token is correct in [config.json](config.json)

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author ✨

**lost-hope** (Soeren)

## Contributing 🤝

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer ⚠️

Use this bot responsibly. Always ensure you have proper moderation practices in place and review ban logs regularly to prevent false positives. The author is not responsible for any misuse of this software.