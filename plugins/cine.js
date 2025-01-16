const mime = require('mime-types');  // Make sure to install mime-types package
const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const { File } = require('megajs');
const config = require('../config')
const { sinhalaSub } = require("mrnima-moviedl")
const {
  cmd,
  commands
} = require('../command')



/*

async function search() {
    const link = `https://cinesubz.co/?s=kgf`;
    try {
        const response = await axios.get(link);
        const $ = cheerio.load(response.data);
        const result = [];

        $("div.module > div.content.rigth.csearch > div > div > article").each((_, element) => {
            result.push({
                title: $(element).find("a").text().replace(/\n/g, '').trim(),
                image: $(element).find("img").attr("src"),
                imdb: $(element).find("div.meta > span.rating").text().trim(),
                year: $(element).find("div.meta > span.year").text().trim(),
                link: $(element).find("div.title > a").attr("href"),
                short_desc: $(element).find("div.contenido > p").text().trim()
            });
        });

        console.log(result);
    } catch (error) {
        console.error("Error fetching search results:", error.message);
    }
}

async function download() {
    const link = "https://cinesubz.co/movies/rasavathi-2024-sinhala-subtitles/";
    try {
        const response = await axios.get(link);
        const $ = cheerio.load(response.data);
        const result = {};

        result.title = $("div.content.right > div.sheader > div.data > h1").text().trim();
        result.image = $("div.content.right > div.sheader > div.poster > img").attr("src");
        result.generose = [];
        $("div.content.right > div.sheader > div.data > div.sgeneros > a").each((_, element) => {
            result.generose.push($(element).text());
        });
        result.date = $("div.content.right > div.sheader > div.data > div.extra > span.date").text();
        result.country = $("div.content.right > div.sheader > div.data > div.extra > span.country").text();
        result.subtitle_author = $("div:nth-child(4) > center > span").text();
        result.imdb = $("#repimdb > strong").text();

        const download_links = [];
        $("#directdownloadlinks > div > div > table > tbody > tr").each((_, element) => {
            download_links.push({
                quality: $(element).find("td > a > strong").text(),
                size: $(element).find("td").eq(1).text(),
                link: $(element).find("td > a").attr("href"),
            });
        });

        result.download_links = await Promise.all(download_links.map(async (i) => ({
            quality: i.quality,
            size: i.size,
            download_link: await get_dl_link(i.link)
        })));

        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error("Error fetching movie details:", error.message);
    }
}

async function get_dl_link(apilink) {
    try {
        const res = await axios.get(apilink);
        const $ = cheerio.load(res.data);
        const link = $("#link").attr("href");
        const dl_link = await generateMatchingLinks(link);
        return dl_link;
    } catch (error) {
        console.error("Error fetching download link:", error.message);
        return [];
    }
}



async function get_dl_link(apilink) {
    try {
        const res = await axios.get(apilink);
        const $ = cheerio.load(res.data);

        const link = $("#link").attr("href");
        
  
        var dl_link = await generateMatchingLinks(link);
        
        return dl_link;  
    } catch (error) {
        console.error(`Error fetching download link: ${error.message}`);
        return null; 
    }
}
*/

cmd({
    pattern: "cines",	
    react: '🔎',
    category: "download",
    desc: "cinesubz moive downloader",
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
   if(!q) return await reply('*please give me text..‼️*')         
	var link = `https://cinesubz.co/?s=${q}`
    var response = await axios.get(link);
    var $ = cheerio.load(response.data);
    const result = [];

    $("div.module > div.content.rigth.csearch > div > div > article").each((a, b) => {
        result.push({
            title: $(b).find("a").text().replace(/\n/g, '').trim(),
            image: $(b).find("img").attr("src"),
            imdb: $(b).find("div.meta > span.rating").text().trim(),
            year: $(b).find("div.meta > span.year").text().trim(),
            link: $(b).find("div.title > a").attr("href"),
            short_desc: $(b).find("div.contenido > p").text().trim()
        })
    })
      
        if (result.length < 1) return await conn.sendMessage(from, { text: 'erro !' }, { quoted: mek } )
      let textw = `𝗗𝗔𝗥𝗞𝗕𝗢𝗧 𝗖𝗜𝗡𝗘𝗦𝗨𝗕𝗭 𝗠𝗢𝗩𝗜𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 \n\n`;	
for (var i = 0; i < result.length; i++) {
  textw +=`*📌 Title:* ${result[i].title}\n`	
  textw +=`*📚 CatName:* ${result[i].imdb}\n`
  textw +=`*📅 Date:* ${result[i].year}\n`
  textw +=`*📎 Link:* ${result[i].link}\n`
  textw +=`*📃 Rating:* ${result[i].short_desc}\n\n--------------------------------------------\n\n
`
} 
        
return await conn.sendMessage(config.JID, { image: { url:result[0].image } , caption: textw } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply()
l(e)
}
})      
