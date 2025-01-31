const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "P6BDARZS#vfFycq3jTYboTc3CPORt_LRZ5qKu--CeOpw6qshdnf0",
MONGODB: process.env.MONGODB || "mongodb://mongo:imEdBxCZMYQXvZukZmFHazNPYjBKqWkX@roundhouse.proxy.rlwy.net:11503",
};
