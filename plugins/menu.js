const {readEnv} = require('../lib/database')
const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumner, botNumner2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const config = await readEnv();
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',    
news: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `${config.PREFIX}${commands[i].pattern}\n`;
 }
}

let madeMenu = `👏 *Hellow ${pushname}*


> ❱❱❯ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗧𝗢 𝗗𝗔𝗥𝗞𝗕𝗢𝗧 ❮❰❰

❀━━━━━━━━━━━━━━━━━━━━━━━━━━❀


> *DOWNLOAD COMMANDS* ⬇️

${menu.download}

> *MAIN COMMANDS* ✨

${menu.main}

> *GROUP COMMANDS* 👥

${menu.group}

> *OWNER COMMANDS* 🫠

${menu.owner}

> *CONVERT COMMANDS* 🤌

${menu.convert}

> *NEWS COMMANDS* 🌍

${menu.news}

> *TOOLS COMMANDS*

${menu.tools}

❀━━━━━━━━━━━━━━━━━━━━━━━━━━━━❀

> ❬❬❀   P̴O̴W̴E̴R̴D̴ B̴Y̴ 𝐊𝐀𝐕𝐈𝐃𝐔 𝐑𝐀𝐒𝐀𝐍𝐆𝐀  ❀❯❯
`
await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})
  
}catch(e){
console.log(e)
reply(`${e}`)
}
})
