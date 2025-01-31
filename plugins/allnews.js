/*
Please Give Credit 🙂❤️
⚖️𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : ©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚
*/
const { cmd, commands } = require('../command');
const { fetchJson } = require('../lib/functions');
const domain = `https://manu-ofc-api-site-6bfcbe0e18f6.herokuapp.com/`
const api_key = `Manul-Official-Key-3467`
//===== Api-Key එක මට Message එකක් දාල ඉල්ලගන්න, +94 74 227 4855 සල්ලි ගන්න නෙවේ, කීයක් Use කරනවද දැනගන්න...❤️=====

//============================================
cmd({
    pattern: "itn",
    react: "📄",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        const response = await fetchJson(`${domain}itn-news?apikey=${api_key}`);
        
        if (response.status) {
            // Extracting data from the response
            const title = response.result.title;
            const image = response.result.image;
            const date = response.result.date;
            const url = response.result.url;
            const desc = response.result.desc;
            const creator = response.creator;
            
            // Craft the message
            const message = `            
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐍𝐄𝐖𝐒 📰
            
📝 *News Title:* ${title}
🗓️ *Date:* ${date}
📜 *Description:* ${desc}
🏷️ *Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Sending the message to the user
            await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, no news available at the moment.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "hiru",
    react: "⭐",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        const response = await fetchJson(`${domain}api/hiru-news?apikey=${api_key}`);
            // Extracting necessary fields from the JSON response
            const title = response.data.title;
            const date = response.data.date;
            const desc = response.data.desc;
            const link = response.data.link;
            const image = response.data.img;
            const createdBy = response.createdBy;
            
            // Craft the message to send to the user
            const message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐇𝐈𝐑𝐔 𝐍𝐄𝐖𝐒 ⭐

📝 *Title:* ${title}
🗓️ *Date:* ${date}
📜 *Description:* ${desc}
🏷️ *Read More:* ${link}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Sending the message along with the image
            await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "lankadeepa",
    react: "😎",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching JSON data from the API endpoint
        const response = await fetchJson(`${domain}lankadeepa-news?apikey=${api_key}`);

        if (response.status) {
            // Extracting necessary fields from the response
            const title = response.data.title;
            const date = response.data.date;
            const desc = response.data.desc;
            const url = response.data.url;
            const image = response.data.image;
            const createdBy = response.createdBy;
            
            // Craft the message to send to the user
            const message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐋𝐀𝐍𝐊𝐀𝐃𝐄𝐄𝐏𝐀 𝐍𝐄𝐖𝐒 😎
 
📝 *Title:* ${title}
🗓️ *Date:* ${date}
📜 *Description:* ${desc}
🏷️ *Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Sending the message along with the image
            await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
        } else {
            reply('Sorry, there was an issue fetching the news.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "siyatha",
    react: "📰",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching the news JSON data from the API
        const response = await fetchJson(`${domain}siyatha-news?apikey=${api_key}`);

        if (response.status) {
            // Extracting data from the response
            const title = response.result.title;
            const date = response.result.date;
            const desc = response.result.desc;
            const url = response.result.url;
            const image = response.result.image !== "Image not found" ? response.result.image : null;
            const creator = response.creator;

            // Crafting the message
            let message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐒𝐈𝐘𝐀𝐓𝐇𝐀 𝐍𝐄𝐖𝐒 📄
      
📝 *Title:* ${title}
🗓️ *Date:* ${date}
📜 *Description:* ${desc}
🏷️ *Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Send the message, along with an image if available
            if (image) {
                await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
            } else {
                await conn.sendMessage(from, { text: message }, { quoted: mek });
            }
        } else {
            reply('Sorry, there was an issue fetching the news.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "sirasa",
    react: "💢",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching the news JSON data from the API
        const response = await fetchJson(`${domain}sirasa-news?apikey=${api_key}`);

        if (response.status) {
            // Extracting data from the response
            const title = response.result.title;
            const date = response.result.date;
            const desc = response.result.desc;
            const url = response.result.url;
            const image = response.result.image !== "Image not found" ? response.result.image : null;
            const creator = response.creator;

            // Crafting the message
            let message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐒𝐈𝐑𝐀𝐒𝐀 𝐍𝐄𝐖𝐒 ♦
        
📝 *Title:* ${title}
🗓️ *Date:* ${date}
📜 *Description:* ${desc}
🏷️ *Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Send the message, along with an image if available
            if (image) {
                await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
            } else {
                await conn.sendMessage(from, { text: message }, { quoted: mek });
            }
        } else {
            reply('Sorry, there was an issue fetching the news.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "ada",
    react: "🔊",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching the news JSON data from the API
        const response = await fetchJson(`${domain}ada-news?apikey=${api_key}`);

        if (response.status) {
            // Extracting data from the response
            const title = response.data.result.title;
            const date = response.data.result.date;
            const time = response.data.result.time;
            const desc = response.data.result.desc;
            const url = response.data.result.url;
            const image = response.data.result.image !== "Image not found" ? response.data.result.image : null;
            const creator = response.data.creator;

            // Crafting the message
            let message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐀𝐃𝐀 𝐍𝐄𝐖𝐒 🔊      

📝 *Title:* ${title}
🗓️ *Date:* ${date}
⌚ *Time:* ${time}
📜 *Description:* ${desc}
🏷️ *Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Send the message, along with an image if available
            if (image) {
                await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
            } else {
                await conn.sendMessage(from, { text: message }, { quoted: mek });
            }
        } else {
            reply('Sorry, there was an issue fetching the news.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "bbc",
    react: "🌌",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching the news data from the API
        const response = await fetchJson(`${domain}bbc-news?apikey=${api_key}`);

        if (response.status) {
            // Extracting data from the response
            const title = response.data.result.title;
            const desc = response.data.result.desc;
            const date = response.data.result.date || "Not provided";
            const image = response.data.result.image;
            const url = response.data.result.url;
            const creator = response.data.creator;

            // Crafting the message
            let message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐁𝐁𝐂 𝐍𝐄𝐖𝐒 🌌            

📝 *Title:* ${title}
🗓️ *Date:* ${date}
📜 *Description:* ${desc}
🏷️ *Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Send the message, along with an image if available
            if (image) {
                await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
            } else {
                await conn.sendMessage(from, { text: message }, { quoted: mek });
            }
        } else {
            reply('Sorry, there was an issue fetching the news.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//============================================
cmd({
    pattern: "gagana",
    react: "✈",
    desc: "news",
    category: "news",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Fetching the news data from the API
        const response = await fetchJson(`${domain}gagana-news?apikey=${api_key}`);

        if (response.status) {
            // Extracting data from the response
            const title = response.data.result.title;
            const desc = response.data.result.desc;
            const image = response.data.result.image;
            const url = response.data.result.url;
            const creator = response.data.creator;

            // Crafting the message
            let message = `
𝐃𝐀𝐑𝐊𝐁𝐎𝐓 𝐆𝐀𝐆𝐀𝐍𝐀 𝐍𝐄𝐖𝐒 ✈️
   
*Title:* ${title}
*Description:* ${desc}
*Read More:* ${url}

> *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲 - : 𝗞𝗔𝗩𝗜𝗗𝗨 𝗥𝗔𝗦𝗔𝗡𝗚𝗔*
            `;

            // Send the message, along with an image if available
            if (image) {
                await conn.sendMessage(from, { image: { url: image }, caption: message }, { quoted: mek });
            } else {
                await conn.sendMessage(from, { text: message }, { quoted: mek });
            }
        } else {
            reply('Sorry, there was an issue fetching the news.');
        }
    } catch (e) {
        console.log(e);
        reply(`Error: ${e}`);
    }
});
//==========©𝐌𝐑 𝐌𝐀𝐍𝐔𝐋 𝐎𝐅𝐂 💚=============
