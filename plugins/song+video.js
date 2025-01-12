const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumner, botNumner2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title‼..")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `    
✨ *𝕐𝕋 𝕊𝕆ℕ𝔾 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ* ✨


🎶S̶O̶N̶G̶ D̶O̶W̶N̶L̶O̶A̶D̶E̶R̶...🎶
☉=====================☉

┏━━━━━━━━━━━━━━━━━━━━━━☉➤
┃ ❁❱❱ *title:* ${data.title}
┃
┃ ❁❱❱ *description:* ${data.description}
┃
┃ ❁❱❱ *time:* ${data.timestamp}
┃
┃ ❁❱❱ *ago:* ${data.ago}
┃
┃ ❁❱❱ *views:* ${data.views}
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━☉➤


❬❬❀   P̴O̴W̴E̴R̴D̴ B̴Y̴ 𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀  ❀❯❯
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadurl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadurl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"> POWERD BY 𝗞𝗔𝗩𝗜𝗗𝗨_𝗥𝗔𝗦𝗔𝗡𝗚𝗔"},{quoted:mek})



  
}catch(e){
console.log(e)
reply(`${e}`)
}
})

//======video-dl=======

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumner, botNumner2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("please give me url or title‼..")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `    
✨ *𝕐𝕋 𝕍𝕀𝔻𝔼𝕆 𝔻𝕆𝕎ℕ𝕃𝕆𝔸𝔻𝔼ℝ* ✨


🎬S̴O̴N̴G̴ D̴O̴W̴N̴L̴O̴A̴D̴E̴R̴...🎬
☉=====================☉

┏━━━━━━━━━━━━━━━━━━━━━━━☉➤
┃ ❁❱❱ *title:* ${data.title}
┃
┃ ❁❱❱ *description:* ${data.description}
┃
┃ ❁❱❱ *time:* ${data.timestamp}
┃
┃ ❁❱❱ *ago:* ${data.ago}
┃
┃ ❁❱❱ *views:* ${data.views}
┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━☉➤


❬❬❀   P̴O̴W̴E̴R̴D̴ B̴Y̴ 𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀  ❀❯❯
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadurl = down.dl_url

//send video + document message
await conn.sendMessage(from,{video: {url:downloadurl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadurl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"> POWERD BY 𝗞𝗔𝗩𝗜𝗗𝗨_𝗥𝗔𝗦𝗔𝗡𝗚𝗔"},{quoted:mek})



  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
