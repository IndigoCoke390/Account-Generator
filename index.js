const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "/";
var fs = require("fs");
var lineReader = require("line-reader");
var async = require("async");
const firstline = require("firstline");
const generated = new Set();
var os = require("os");
var express = require('express');
var app = express();
const TOKEN = process.env.TOKEN;
const keep_alive = require('./keep_alive.js')

bot.on("ready", () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on("message", message => {
    if (message.channel.id === "764630219155832843" || "755360514628124714" || "755361635270524969" || "755362061789167616") { //This will make the bot work only in that channel
        if (message.author.bot) return;
            var command = message.content
            .toLowerCase()
            .slice(prefix.length)
            .split(" ")[0];

    if (command === "test") {
        message.channel.send("Test done, bot is working");
        }

    if (command === "tos") {
        message.channel.send("This is the InfyGen ToS.", {
  files: [
    "./infygentos/INFYGEN_TOS.txt"
  ]
});
        }
        
		
		    if(command === "help"){
        message.channel.send("```\n HELP  \n\n User\n /stats - shows how many members are in InfyGen\n /tos - sends you the InfyGen ToS\n /help - shows the help commands \n /test - see if the bot is working \n /gen <account> - generate an account \n \n Administrator \n /create <account> - creates a database for the account \n /add <credentials> <account> - adds credentials to the account database \n /restock <account> - pings everyone that the account has been restocked ```")
 }

    if (command === "gen") {
        if (generated.has(message.author.id)) {
            message.channel.send(
            "Wait 2 minutes before generating another account!. - " +
            message.author
            );
            } else {
                let messageArray = message.content.split(" ");
                let args = messageArray.slice(1);
                if (!args[0])
                    return message.reply("Please, specify the service you want!");
                var fs = require("fs");
                const filePath = __dirname + "/accounts" +"/" + args[0] + ".txt";
                fs.readFile(filePath, function (err, data) {
                    if (!err) {
                        data = data.toString();
                        var position = data.toString().indexOf("\n");
                        var firstLine = data.split("\n")[0];
												firstLine.substring(firstLine.indexOf("\n") + 1)
                        message.author.send(firstLine);
											
                        if (position != -1) {
                            data = data.substr(position + 1);
                            fs.writeFile(filePath, data, function (err) {
                                const embed = {
                                    title: "Account Generated!",
                                    description: "Check your dm for the account's information!",
                                    color: 8519796,
                                    timestamp: "2019-04-04T14:16:26.398Z",
                                    footer: {
                                        icon_url:
                                            "https://cdn.discordapp.com/avatars/530778425540083723/7a05e4dd16825d47b6cdfb02b92d26a5.png",
                                        text: "Buy discord bots from Silvano#8106 edited by Naomi#0069"
                                    },
                                    thumbnail: {
                                        url:
                                            "http://www.compartosanita.it/wp-content/uploads/2019/02/right.png"
                                    },
                                    author: {
                                        name: "Account Generator",
                                        url: "https://discordapp.com",
                                        icon_url: bot.displayAvatarURL
                                    },
                                    fields: []
                                };
                                message.channel.send({ embed });
																console.log(`a ${args[0]} account was generated, the account was ${firstLine}`)

                                generated.add(message.author.id);
                                setTimeout(() => {
                                    // Removes the user from the set after a minute
                                    generated.delete(message.author.id);
                                }, 20000);
                                if (err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            message.channel.send(
                                "Sorry, there isn't any account available for that service!"
                            );
														console.log(args[0] + ` is out of stock`);
                        }
                    } else {
                        message.channel.send(
                            "Sorry, that service doesn't exists on our database"
                        );
                    }
                });
            }
        }
        else
            if (command === "stats") {
                message.channel.send(`Total users: ${bot.users.size}`)
            }

     if (command === "add") {
            if (!message.member.permissions.has("ADMINISTRATOR"))
                return message.reply("Sorry, you can't do it, you are not an admin!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            var account = args[0]
            var service = args[1]
            const filePath = __dirname + "/accounts" +"/" + args[1] + ".txt";
            fs.appendFile(filePath, os.EOL + args[0], function (err) {
                if (err) return console.log(err);
                message.channel.send("Done!")
            });


        }
        if (command === "create") {
            if (!message.member.permissions.has("ADMINISTRATOR"))
                return message.reply("Sorry, you can't do it, you are not an admin!");
            var fs = require("fs");
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            const filePath = __dirname + "/accounts" +"/" + args[0] + ".txt";
            fs.writeFile(filePath, 'first:first', function (err) {
                if (err) throw err;
                message.channel.send("Done!")
            });
        }
       if (command === "restock") {
            let messageArray = message.content.split(" ");
            let args = messageArray.slice(1);
            if (!message.member.permissions.has("ADMINISTRATOR"))
                return message.reply("Sorry, you can't do it, you are not an admin!");
            if (!args[0])
                return message.reply(
                    "Please, specify the service you want to restock!"
                );
            message.channel.send(
                "@everyone " +
                "**" +
                args[0] +
                "**" +
                " has been restocked by " +
                "<@" +
                message.author.id +
                ">"

            );
        }
    }
});

bot.login(TOKEN);
