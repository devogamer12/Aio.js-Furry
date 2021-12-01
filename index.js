const aoijs = require("aoi.js")
const express = require("express")

const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: process.env.prefix, //Discord Bot Prefix
intents: "all" //Discord Intents
})

//Events
bot.onMessage()

//Command Example
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})