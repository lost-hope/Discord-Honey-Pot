// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits, Partials} = require('discord.js');
const fs = require('fs');
const { token,channelID,serverid } = require('./config.json');
const list = require('./gifs.json');

// Create a new client instance
const client = new Client({
    intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.DirectMessages],
    partials: [Partials.Message, Partials.Channel, Partials.Reaction]
});

client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on(Events.MessageCreate, message => {
    // If the message is from a bot, ignore it
    if (message.author.bot) return;
    // If the message is not in a guild, send a DM to a specific user
    if (message.guild.id === serverid && message.channel.id === channelID) {
       // Ban the user who sent the message           
        message.member.ban({ reason: 'Banned for sending a message in the WLED channel.', deleteMessageSeconds: 60* 60 * 24 * 7 })
            .then(() => {
                //log the ban action, the message content and the servername to the console and save it to a file calles log.csv
                const logMessage = `Banned ${message.author.tag} for sending a message in the honey pot. Message content: "${message.content}" Server: "${message.guild.name}"`;
                console.log(logMessage);
                fs.appendFile('log.txt', logMessage, err => {
                    if (err) console.error('Failed to write to log file:', err);
                });
            })
            .catch(err => {
                console.error(`Failed to ban ${message.author.tag}:`, err);
            });            
    }
});


// Log in to Discord with your client's token
client.login(token);
