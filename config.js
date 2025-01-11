const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/26wDq12B/Screenshot-202410031546132-ezgif-com-webp-to-jpg-converter.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hellow, I am Kavidu Rasanga I am alive now...🌝",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",   
MODE: process.env.MODE || "public",  // inbox , groups , private , public
};
