const config = require('../config')
const {cmd , commands} = require('../command')
const {sleep} = require('../lib/functions')

cmd({
    pattern: "restart",
    desc: "restart",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd
try{


