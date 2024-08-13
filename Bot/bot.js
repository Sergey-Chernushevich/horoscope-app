// const { Telegraf } = require("telegraf");
// const TOKEN = "6597708108:AAGEOg_8aeeyfAtHXwnQszrLp37gY-L004g";
// const bot = new Telegraf(TOKEN);
// const web_link = "https://localhost:3000/";
// bot.start((ctx) =>
//   ctx.reply("Welcome bich", {
//     reply_markup: {
//       keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
//     },
//   })
// );
// // bot.help((ctx) => ctx.reply("Send me a sticker"));
// // bot.on(message("sticker"), (ctx) => ctx.reply("👍"));
// // bot.hears("hi", (ctx) => ctx.reply("Hey there"));
// bot.launch();
const { Telegraf, Markup } = require("telegraf");
const TOKEN = "6597708108:AAGEOg_8aeeyfAtHXwnQszrLp37gY-L004g"; // замените на ваш токен
const bot = new Telegraf(TOKEN);
const web_link = "https://localhost:3000/";

bot.start((ctx) =>
  ctx.reply("Welcome bich", {
    reply_markup: Markup.keyboard([
      Markup.button.url("Open Web App", web_link),
    ]),
  })
);

bot.launch();
