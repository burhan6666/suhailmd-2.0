const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923046698972";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_48_01_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDUwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTI2LFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY1LFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDY3LFxuICAgICAgICA1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAyNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDUxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5MixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDk0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzLFxuICAgICAgICA0MyxcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1NSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODgsXG4gICAgICAgIDc5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExMixcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0LFxuICAgICAgICAxODQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjQ2YjZCV202eDBxbUREaXNVWFlQU3Ezb29DM2F5bmRnQllnUkdhVk82MkU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIndtb1RxSXQzUWZHVEY3MWowSkkwMXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDkyMmNiNTAtOTVmMS00MGU3LTgyY2QtYmU1ZWEyNzU3N2IzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2NyxcbiAgICAgIDE3NixcbiAgICAgIDI0NixcbiAgICAgIDYsXG4gICAgICA2NyxcbiAgICAgIDIwMyxcbiAgICAgIDE4MSxcbiAgICAgIDAsXG4gICAgICA3NyxcbiAgICAgIDE3MixcbiAgICAgIDE0OSxcbiAgICAgIDIyMixcbiAgICAgIDExOCxcbiAgICAgIDEyOSxcbiAgICAgIDE3NSxcbiAgICAgIDE0MSxcbiAgICAgIDE2OSxcbiAgICAgIDc0LFxuICAgICAgMjIxLFxuICAgICAgNjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyMTYsXG4gICAgICA0NyxcbiAgICAgIDM5LFxuICAgICAgMTgyLFxuICAgICAgMTgxLFxuICAgICAgMzAsXG4gICAgICA5LFxuICAgICAgNTMsXG4gICAgICAxOTQsXG4gICAgICAxNjEsXG4gICAgICA5NCxcbiAgICAgIDM1LFxuICAgICAgMjA2LFxuICAgICAgMTEyLFxuICAgICAgMzYsXG4gICAgICAyMDcsXG4gICAgICAyNTAsXG4gICAgICAxNzIsXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTE1OUFdUWTdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA0NjY5ODk3Mjo5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlxcXCLwk4ap8J2QiPCdkJMn8J2QkiAg8J2Ql/CThqpcXFwiXFxu8JKLpvCSg69cXG7wkoum8JKDr1xcbvCSi6bwkoOvXFxu8JKLpvCSg69cXG7wkoum8JKDr1xcbvCSi6bwkoOvIFxcbvCSi6bwkoOvXFxu8JKLpvCSg69cXG7wkoum8JKDr1xcbvCSi6bwkoOvIFxcbvCSi6bwkoOvIFxcbvCSi6bwkoOvXFxu8JKLpvCSg69cXG7lvaHwnZCB8J2QlPCdkJHwnZCH8J2QgPCdkI1cIixcbiAgICBcImxpZFwiOiBcIjEyMzExMTQxMjM2NzU3MTo5N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPeXFzOXdCRVBiNjRyc0dHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhObjBWRExuWm1xUkJBUlBtc3oxK2VlRFNEV0JBa1U3K3lwcW1lWEoyUXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYk1WVDhkb05PYVB0ZDNwdVNjMnFoanRWMXRFdkJoa3lraUpmTmhrT2JSa1RDRHgyYVBTd3A3RDlubTlMdGhLakJORmVNeUlQdU9QTDRGMU9TKzE2RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN3hvVnpNUEZuVnJTMW5BOVpybUF3V0ZZWmFlVW1Gb2NYbU0xYlRiRjRJT0RwbExFalJFNmVKNVhsQVZGT0d3V1hLWS9mcEwzL01lT1BqLy8rKytRZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ2Njk4OTcyOjk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1OTY2MDc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzRGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHNEYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJoS21SYWdydER1bkdzNUtGdEhjUENqTkNIZm9GUkpXY0p5b3c4aXhDcVZZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ2MjIxNDUwOCxcImN1cnJlbnRJbmRleFwiOjE4LFwiZGV2aWNlSW5kZXhlc1wiOlswLDIsMThdfSxcInRpbWVzdGFtcFwiOlwiMTczNTkxODE3MTc2OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Itx X Burhan",
  ownername:process.env.OWNER_NAME|| "Burhan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //alwaysonline:process.env.WAPRESENCE|| "available", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
