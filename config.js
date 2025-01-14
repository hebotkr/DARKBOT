const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "GqZmHb7D#OXwB5jSWSH_V8S7FprsgopTqwtdA3y0dzqaxGla_Sxc",
MONGODB: process.env.MONGODB || "mongodb://mongo:EPFIYNcKWdSVoMSaZGhcnFNoKnTryKFY@junction.proxy.rlwy.net:34409",
};
