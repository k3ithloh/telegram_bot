import { Context, Markup, Telegraf } from "telegraf";
import { Update } from "typegram";
import dotenv from "dotenv";
dotenv.config();

const bot: Telegraf<Context<Update>> = new Telegraf(
  process.env.BOT_TOKEN as string
);
bot.start((ctx) => {
  ctx.reply("Hello " + ctx.from.first_name + "!");
});
bot.help((ctx) => {
  ctx.reply("Send /start to receive a greeting");
  ctx.reply("Send /quit to stop the bot");
});
bot.command("quit", (ctx) => {
  ctx.telegram.leaveChat(ctx.message.chat.id);
  ctx.leaveChat();
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
