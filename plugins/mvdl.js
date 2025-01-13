const { cmd } = require('../command');
const { SinhalaSub } = require('@sl-code-lords/movie-api');
const { PixaldrainDL } = require("pixaldrain-sinhalasub");
const axios = require('axios');

// Movie search command
cmd({
    pattern: "moviedl",
    alias : "mvdl,sinhalasub,sinhalasublk",
    desc: "Search for a movie and get details and download options.",
    category: "movie",
    react: "🔍",
    filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
    try {
        const input = q.trim();
        if (!input) return reply("Please provide a movie or TV show name to search.");
        
        // Step 1: Search for the movie
        const result = await SinhalaSub.get_list.by_search(input);
        if (!result.status || result.results.length === 0) return reply("No results found.");

        let message = "Search Results:\n\n";
        result.results.forEach((item, index) => {
            message += `*📽️NADEEN-MD MOVIE DOWNLOADER📽️* \n\n ${index + 1}. ${item.title}\nType: ${item.type}\nLink: ${item.link}\n\n`;
        });

        // Step 2: Send the search results to the user
        const sentMsg = await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/2elpxs.png` },
            caption: message,  // Send the description as the caption
            contextInfo: {
                mentionedJid: ['94716769285@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363304606757133@newsletter',
          newsletterName: "NADEEN-MD™️",
          serverMessageId: 999
    }
       }
            }, { quoted: mek });

        // Wait for the user to select a movie by number
        const movieSelectionListener = async (update) => {
            const message = update.messages[0];

            if (!message.message || !message.message.extendedTextMessage) return;

            const userReply = message.message.extendedTextMessage.text.trim();
            const selectedMovieIndex = parseInt(userReply) - 1;

            // Ensure the user has selected a valid movie index
            if (selectedMovieIndex < 0 || selectedMovieIndex >= result.results.length) {
                await conn.sendMessage(from, {
                    react: { text: '❌', key: mek.key }
                });
                return reply("❗ Invalid selection. Please choose a valid number from the search results.");
            }

            const selectedMovie = result.results[selectedMovieIndex];
            const link = selectedMovie.link;

            // Step 3: Fetch movie details from the selected movie's link
            const movieDetails = await SinhalaSub.movie(link);
            if (!movieDetails || !movieDetails.status || !movieDetails.result) {
                return reply("❗ Movie details not found.");
            }

            const movie = movieDetails.result;
            let movieMessage =`${movie.title}\n\n`;
            movieMessage += `📅 𝖱𝖾𝗅𝖾𝖺𝗌𝖾 𝖣𝖺𝗍𝖾: ${movie.release_date}\n`;
            movieMessage += `🗺 𝖢𝗈𝗎𝗇𝗍𝗋𝗒: ${movie.country}\n`;
            movieMessage += `⏰ 𝖣𝗎𝗋𝖺𝗍𝗂𝗈𝗇: ${movie.duration}\n`;

            // Handling genres properly
            const genres = Array.isArray(movie.genres) ? movie.genres.join(', ') : movie.genres;
            movieMessage += `🎭 𝖦𝖾𝗇𝖾𝗋𝖾𝗌: ${genres}\n`;

            movieMessage += `⭐ 𝖨𝗆𝖽𝖻 𝖱𝖺𝗍𝗂𝗇𝗀: ${movie.IMDb_Rating}\n`;
            movieMessage += `🎬 𝖣𝗂𝗋𝖾𝖼𝗍𝗈𝗋: ${movie.director.name}\n\n`;
            movieMessage += `📽️ Powered by: NADEEN POORNA\n\n`;
          movieMessage += `乂 REPLY BELOW NUMBER\n\n`;
          movieMessage += `1 | 𝖲𝖣 - 480𝗉 \n`;
          movieMessage += `2 | 𝖧𝖣 - 720p \n`;
          movieMessage += `3 | 𝖥𝖧𝖣 - 1080p\n\n`;
  
          movieMessage += `📌️Join us : https://whatsapp.com/channel/0029VagN2qW3gvWUBhsjcn3I \n\n`;
          movieMessage += `> *🎬NADEEN-MD🎬* `
            const imageUrl = movie.images && movie.images.length > 0 ? movie.images[0] : null;

            // Step 4: Send movie details with download options
            const movieDetailsMessage = await conn.sendMessage(from, {
                image: { url: imageUrl },
                caption: movieMessage,
                contextInfo: {
                    mentionedJid: ['94716769285@s.whatsapp.net'], // specify mentioned JID(s) if any
      groupMentions: [],
      forwardingScore: 1,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
          newsletterJid: '120363304606757133@newsletter',
          newsletterName: "NADEEN-MD™️",
          serverMessageId: 999
      },
      externalAdReply: {
          title: 'NADEEN-MD',
          body: 'NADEEN POORNA',
          mediaType: 1,
          sourceUrl: "https://github.com/Nadeenpoorna-max/NADEEN-MD-V2",
          thumbnailUrl: 'https://files.catbox.moe/2nmi9q.png', // This should match the image URL provided above
          renderLargerThumbnail: false,
          showAdAttribution: true
      }
         }
            }, { quoted: mek });

            // Listen for the user's reply to select the download quality
            const qualityListener = async (update) => {
                const message = update.messages[0];

                if (!message.message || !message.message.extendedTextMessage) return;

                const userReply = message.message.extendedTextMessage.text.trim();

                // Ensure the user is responding to the right message
                if (message.message.extendedTextMessage.contextInfo.stanzaId === movieDetailsMessage.key.id) {
                    let quality;
                    switch (userReply) {
                        case '1':
                            quality = "SD 480p";
                            break;
                        case '2':
                            quality = "HD 720p";
                            break;
                        case '3':
                            quality = "FHD 1080p";
                            break;
                        default:
                            await conn.sendMessage(from, {
                                react: { text: '❌', key: mek.key }
                            });
                            return reply("❗ Invalid option. Please select from SD, HD, or FHD.");
                    }

                    try {
                        // Fetch the direct download link for the selected quality
                        const directLink = await PixaldrainDL(link, quality, "direct");
                        if (directLink) {
                            // Provide download option
                            await conn.sendMessage(from, {
                                document: {
                                    url: directLink
                                },
                                mimetype: 'video/mp4',
                                fileName: `🎬NADEEN-MD🎬(${movie.title}).mp4`,
                                caption: `${movie.title} - ${quality}\n\n> *📽️ɴᴀᴅᴇᴇɴ-ᴍᴅ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ📽️* `
                            }, { quoted: mek });

                            // React with success
                            await conn.sendMessage(from, {
                                react: { text: '✅', key: mek.key }
                            });
                        } else {
                            await conn.sendMessage(from, {
                                react: { text: '❌', key: mek.key }
                            });
                            return reply(`❗ Could not find the ${quality} download link. Please check the URL or try another quality.`);
                        }
                    } catch (err) {
                        console.error('Error in PixaldrainDL function:', err);
                        await conn.sendMessage(from, {
                            react: { text: '❌', key: mek.key }
                        });
                        return reply("❗ An error occurred while processing your download request.");
                    }
                }
            };

            // Register the quality listener for this movie
            conn.ev.on("messages.upsert", qualityListener);

            // Clean up the listener after 60 seconds to prevent memory leaks
            setTimeout(() => {
                conn.ev.off("messages.upsert", qualityListener);
            }, 60000);
        };

        // Register the movie selection listener
        conn.ev.on("messages.upsert", movieSelectionListener);

        // Clean up the listener after 60 seconds to prevent memory leaks
        setTimeout(() => {
            conn.ev.off("messages.upsert", movieSelectionListener);
        }, 60000);

    } catch (e) {
        console.log(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        return reply(`❗ Error: ${e.message}`);
    }
});
