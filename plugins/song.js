const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 
const si = require('systeminformation')
const os = require('os')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')

cmd({
    pattern: "song",
    alias: ["play","ytsong"],
    react: "🎧",
    desc: "Download Youtube song",
    category: "download",
    use: '.song < Yt url or Name >',
    filename: __filename
},
async(conn, mek, m,{ from, prefix, quoted, q, reply }) => {
try{
const nima = require("@whiskeysockets/baileys")
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '*_Loading song..._* ❗'  } )
var final = new Date().getTime();
await conn.sendMessage(from, { text : '《 █▒▒▒▒▒▒▒▒▒▒▒》10%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ████▒▒▒▒▒▒▒▒》30%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ███████▒▒▒▒▒》50%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ██████████▒▒》80%' , edit : ping.key })
await conn.sendMessage(from, { text : '《 ████████████》100%' , edit : ping.key })


	
if(!q) return await reply("Please give me Yt-url or Name..!")
	
const yt = await ytsearch(q);
if(yt.results.length < 1) return reply("Results is not found..!")

let yts = yt.results[0]  
const ytdl = await ytmp3(yts.url)		
let ytmsg = `
🎶 DARKBOT SONG DOWNLOADER 🎶

❀━━━━━━━━━━━━━━━━━━━━━━━━❀
┃
┃📄 *TITLE :* ${yts.title}
┃
┃🤵 *AUTHOR :* ${yts.author.name}
┃
┃⏳ *RUNTIME :* ${yts.timestamp}
┃
┃👀 *VIEWS :* ${yts.views}
┃
┃🖇️ *URL :* ${yts.url}
┃
❀━━━━━━━━━━━━━━━━━━━━━━━━❀


> *DARKBOT SONG*
`
await conn.sendMessage(from, { image: { url: yts.thumbnail || yts.image || '' }, caption: ytmsg }, { quoted: mek });
await conn.sendMessage(from, { audio: { url: ytdl.download.url }, mimetype: "audio/mpeg" }, { quoted: mek })
await conn.sendMessage(from, { document: { url: ytdl.download.url }, mimetype: "audio/mpeg", fileName: ytdl.result.title + '.mp3', caption: `> *POWERED BY KAVIDU RASANGA✨*` }, { quoted: mek })

} catch (e) {
console.log(e)
reply(e)
}}
)
