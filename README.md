# Simple Telegram Bot using Telegraf, Node.js, and TypeScript on Railway
This guide will walk you through setting up a simple Telegram bot using Telegraf, Node.js, and TypeScript, and deploying it on Railway.

## Prerequisites
- Node.js and npm installed on your local machine
- A Railway account (sign up at https://railway.app/)
- Telegram account and Telegram Bot API token (obtained via the BotFather)
## Step 1: Setting up your local development environment
1.   Initialize a new Node.js project and install required dependencies:

```
npm init -y
npm install telegraf typescript ts-node @types/node

```
2. Initialize a new TypeScript configuration file:

```
npx tsx --init
```
3. Update the tsconfig.json file with the following options:

```
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "outDir": "build",
    "strict": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src"]
}
```
4. Create a new src directory and an index.ts file inside it:

```
mkdir src
touch src/index.ts
```
5. Create '.env' file to store local environment variables
```
BOT_TOKEN=<your_telegram_bot_token>
APP_URL=http://localhost:3000
```
6. Write code in index.ts
- use express server to handle incoming webhook requests
- set up local environment variables to be used for local deployment
- create a Telegraf bot instance and an Express server
- use bodyParser middleware to parse incoming JSON payloads
- set up bot commands and and message handling
- set webhook for the bot using the app URL and webhook path
- set Express app to listen to webhook and pass incoming requests to the bot
- start Express server on specified port
7. Update your package.json file with the following scripts:
```
"scripts": {
  "start": "node build/app.js",
  "build": "tsc",
  "dev": "ts-node src/index.ts"
}
```
## Step 2: Testing the bot locally
1. Start your bot using the dev script:
```
npm run dev
```
2. Open the Telegram app, search for your bot by its username, and send it a message. The bot should respond with an echo of your message.

## Step 3: Deploying the bot on Railway
1. Sign up or log in to your Railway account at https://railway.app/.

2. Link Github repository to Railway project

3. In the project dashboard, go to the "Variables" tab and add the BOT_TOKEN and APP_URL variables. Set the APP_URL variable to the webhook URL Railway provides (e.g., https://your-railway-app-url.railway.app).
4. Commit and Push changes to your Github repo which will automatically trigger the build and deployment process on Railway.
5. Wait for the build and deployment process to complete.

6. Test your bot on Telegram again. It should now be running on Railway and responding to messages.

#### That's it! You have successfully set up and deployed a simple Telegram bot using Telegraf, Node.js, and TypeScript on Railway.







