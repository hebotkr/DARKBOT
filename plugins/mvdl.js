const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')



cmd({
    pattern: "movie",
    alias: ["movi","tests"],
    use: '.movie <query>',
    desc: "Moive downloader",
    category: "main",
    filename: __filename

},

async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let sadas = await fetchJson(`https://darksadas-yt-sinhalasub-search.vercel.app/?q=${q}`)
const msg = `*🎥 MOVIE SEARCH 🎥*`

if (sadas.data.length < 1) return await conn.sendMessage(from, { text: "🚩 *I couldn't find anything :(*" }, { quoted: mek } )

  var rows = [];  
  sadas.data.map((v) => {
	rows.push({
        buttonId: `.infodl ${v.Link}`,
        buttonText: { displayText: `${v.Title}` },
        type: 1
          });
        })

const buttonMessage = {
 
image: {url: config.LOGO},	
  caption: msg,
  footer: config.FOOTER,
  buttons: rows,
  headerType: 4
}
return await conn.buttonMessage(from, buttonMessage, mek)
} catch (e) {
    console.log(e)
  await conn.sendMessage(from, { text: '🚩 *Error !!*' }, { quoted: mek } )
}
})
