const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9046163689";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_07_12_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NCxcbiAgICAgICAgNzksXG4gICAgICAgIDY5LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgNzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTMsXG4gICAgICAgIDMyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMyxcbiAgICAgICAgNDMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNixcbiAgICAgICAgNjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDgwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0LFxuICAgICAgICA5MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDksXG4gICAgICAgIDY0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzcsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg3LFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTExLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjksXG4gICAgICAgIDEwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MyxcbiAgICAgICAgMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk3LFxuICBcImFkdlNlY3JldEtleVwiOiBcImNjUEpVLy9TY1VUN1BoaU1pRkJrenBqUFdzT01EcUorZ2VTR2E1Y1IvWnM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0NjE2MzY4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkRBNDk0NkUzRTY4QUQ0RDc3NEQ0QTA0Njc1MzhFNUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4ODAzNTE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTA0NjE2MzY4OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTZDQThGOTBDM0Q4MDFBMEI4MjQyNkI1MzU1Q0Q2REVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4ODAzNTE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImZVODR2UTI1U2NHNlh1aWZrSTJmMGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWY5YzhkNjUtNzVkZC00NjkxLTlmNDAtODc1YThmNDJiNGZkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3OSxcbiAgICAgIDExNyxcbiAgICAgIDIsXG4gICAgICAxOTAsXG4gICAgICAyMDksXG4gICAgICAyNDAsXG4gICAgICAyMDAsXG4gICAgICAxOTAsXG4gICAgICAyMDksXG4gICAgICA2NyxcbiAgICAgIDE1OCxcbiAgICAgIDIyNCxcbiAgICAgIDEzLFxuICAgICAgMjQ3LFxuICAgICAgNTUsXG4gICAgICAxODYsXG4gICAgICAyNDUsXG4gICAgICAxMjUsXG4gICAgICA5MCxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA3MyxcbiAgICAgIDE4LFxuICAgICAgNzksXG4gICAgICAyNDgsXG4gICAgICAyMjMsXG4gICAgICAxMjIsXG4gICAgICA3OSxcbiAgICAgIDg5LFxuICAgICAgOTcsXG4gICAgICAxNzcsXG4gICAgICAyMjIsXG4gICAgICAxMjgsXG4gICAgICAyNCxcbiAgICAgIDExOSxcbiAgICAgIDE3MixcbiAgICAgIDc3LFxuICAgICAgNjAsXG4gICAgICA4NCxcbiAgICAgIDU0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE2NDhSWEI1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ2MTYzNjg5OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjkzODA4Njg5MzU2OTQ6MTJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS3FseGY0RUVMbmxyYmdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwcXUvVzhDc3dUUmJwT0V2M3Z6V1UvMmJqREhZL0UvNUhhWnJBR2FldmhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInM4SGtDTTVwTTQ3WDF5U1hURWlTMElXWEJRWUo4Z29XZlhlS1VmdWpmMGpLSTg0N1l0YTI2WUhEeWpEUXg4Q0Q5Y3RERnJ0S2IvNTRRdHNFUnJ5b0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlFzRXllMnJBOTNlMEs4bmpGRldoRWFla2F2d2o5T1pWaldZMGJlRXRYOFhRbXZWby9CVEREcmpkaUdnbkUvRmtROEJqbFBFdWRZOFNmWS9QWEdlTmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNDYxNjM2ODk6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4ODAzNTE3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
