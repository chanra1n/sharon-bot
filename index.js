const { Client, GatewayIntentBits, Events } = require('discord.js');
require('dotenv').config();

// Create a new Discord client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

// When the client is ready, run this code once
client.once(Events.ClientReady, (readyClient) => {
    console.log(`✅ Ready! Logged in as ${readyClient.user.tag}`);
});

// Listen for messages
client.on(Events.MessageCreate, async (message) => {
    // Ignore messages from bots
    if (message.author.bot) return;

    // Example: respond to a ping command
    if (message.content === '!ping') {
        await message.reply('Pong! 🏓');
    }
});

// Log in to Discord with your bot token
client.login(process.env.DISCORD_TOKEN);
