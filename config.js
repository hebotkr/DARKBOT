const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SjZRzLiB#Xqo89fRVgEmOl84Mkvg2BwejNbN6MT6V4naO5c1JYXo",
MONGODB: process.env.MONGODB || "mongodb://mongo:imEdBxCZMYQXvZukZmFHazNPYjBKqWkX@roundhouse.proxy.rlwy.net:11503",
};
