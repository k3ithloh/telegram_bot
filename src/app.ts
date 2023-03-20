import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
// import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
// dotenv.config();

type CustomContext = Context<Update> & {
  message: { text: string };
};
const BOT_TOKEN = process.env.BOT_TOKEN;
console.log("BOT_TOKEN:", BOT_TOKEN);
const WEBHOOK_PATH = `/bot${BOT_TOKEN}`;
const PORT = process.env.PORT || 3000;
if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is required");
}

const bot = new Telegraf<CustomContext>(BOT_TOKEN);
const app = express();

app.use(bodyParser.json());
bot.start((ctx) => ctx.reply("Welcome!"));
bot.help((ctx) => ctx.reply("Send me a message and I will echo it."));
bot.on("message", (ctx) => {
  if ("text" in ctx.message) {
    ctx.reply(ctx.message.text);
  } else {
    ctx.reply("Sorry, I can only process text messages.");
  }
});
// Set the webhook for the bot
bot.telegram.setWebhook(`${process.env.APP_URL}${WEBHOOK_PATH}`);

// Set the express app to listen to the webhook
app.use(bot.webhookCallback(WEBHOOK_PATH));

// Start the express server
app.listen(PORT, () => {
  console.log(`Bot is running on port ${PORT}`);
});
