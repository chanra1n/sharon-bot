# Sharon Bot

A Discord bot built with Discord.js.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and add your bot token:
   ```bash
   cp .env.example .env
   ```
4. Get your bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

## Running the Bot

```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## Features

- Basic ping command (`!ping`)

## Adding to Your Server

1. Go to the Discord Developer Portal
2. Select your application
3. Go to OAuth2 > URL Generator
4. Select scopes: `bot`, `applications.commands`
5. Select bot permissions as needed
6. Use the generated URL to invite the bot
