const config = require('../config')
const {
    cmd,
    commands
} = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fg = require('api-dylux');
const si = require('systeminformation')
const os = require('os')


cmd({
    pattern: "ping",
    react: "🛸",
    alias: ["speed","cyber_ping"],
    desc: "To Check bot's ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '`ｐｉｎｎｉｎｇ . . ❕` '  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : ' Ｌｏａｄｉｎｇ ■■▢▢▢▢▢▢▢' , edit : ping.key })
await conn.sendMessage(from, { text : ' Ｌｏａｄｉｎｇ ■■■■▢▢▢▢▢' , edit : ping.key })
await conn.sendMessage(from, { text : ' Ｌｏａｄｉｎｇ ■■■■■■▢▢▢' , edit : ping.key })
await conn.sendMessage(from, { text : ' Ｌｏａｄｉｎｇ ■■■■■■■■▢' , edit : ping.key })
await conn.sendMessage(from, { text : ' Ｌｏａｄｉｎｇ ■■■■■■■■■' , edit : ping.key })
await conn.sendMessage(from, { text : ' Ｌｏａｄｉｎｇ Ｃｏｍｐｌｅｔｅ . . .❄️' , edit : ping.key })

/*var moviedl = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < moviedl.length; i++) {
await conn.sendMessage(from, {text: moviedl[i], edit: key })
}  */

	
return await conn.sendMessage(from, { text : '😼 *𝘿𝙍𝙆 ｐｉｎｇ: ' + (final - inital) + ' Ms* ' , edit : ping.key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})
//=
