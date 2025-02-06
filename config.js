const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Q0IQ2Z7S#T7hi_MrPRnTbSftp1vqblPVTER9mCrN-if5HY751Qew",
};
