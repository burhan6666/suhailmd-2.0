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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_44_12_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU2LFxuICAgICAgICAzNSxcbiAgICAgICAgMzksXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDk2LFxuICAgICAgICA2NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk4LFxuICAgICAgICA0NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjgsXG4gICAgICAgIDg2LFxuICAgICAgICA2OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NixcbiAgICAgICAgMjM4LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY3LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExNixcbiAgICAgICAgNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI3LFxuICAgICAgICAyOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTA0LFxuICAgICAgICAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2LFxuICAgICAgICA1NixcbiAgICAgICAgMTAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDgxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzMSxcbiAgICAgICAgNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4MixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNixcbiAgICAgICAgNjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxLFxuICAgICAgICA3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjM5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODMsXG4gICAgICAgIDI5LFxuICAgICAgICA2LFxuICAgICAgICAzMixcbiAgICAgICAgMTIxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJENHhmRWowUWg2d0tLUVVqTEpmVTlxc2FFSGpvWEN3MnVCWGRQV3lmTDJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTdGVRbEF4YVNfNjdZcmN4TG9icnBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI0MWJhMmIyLWExMGEtNDE0Yy1hNzFkLTVkZGJjOGZjMjM1YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjIsXG4gICAgICA4OCxcbiAgICAgIDIxMixcbiAgICAgIDUzLFxuICAgICAgNzksXG4gICAgICAxNjYsXG4gICAgICA1MixcbiAgICAgIDgyLFxuICAgICAgMTYyLFxuICAgICAgMjQxLFxuICAgICAgMTA5LFxuICAgICAgMzQsXG4gICAgICAzOCxcbiAgICAgIDEyNCxcbiAgICAgIDY5LFxuICAgICAgNTQsXG4gICAgICAyMTYsXG4gICAgICAyNDYsXG4gICAgICAyNDgsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg0LFxuICAgICAgNjgsXG4gICAgICAxNDksXG4gICAgICA5OCxcbiAgICAgIDI0MixcbiAgICAgIDEzNyxcbiAgICAgIDIxLFxuICAgICAgMTM5LFxuICAgICAgMTYyLFxuICAgICAgMzksXG4gICAgICAyNDYsXG4gICAgICAxNDcsXG4gICAgICAxNTMsXG4gICAgICAxOTksXG4gICAgICAxODMsXG4gICAgICAxMzUsXG4gICAgICAxMTYsXG4gICAgICAyMDUsXG4gICAgICAyMixcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQ0hBNUs5RVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDQ2Njk4OTcyOjY0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSXQncyB4IEJ1cmhhblwiLFxuICAgIFwibGlkXCI6IFwiMTIzMTExNDEyMzY3NTcxOjY0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091cXM5d0JFSW1LaWJzR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOE5uMFZETG5abXFSQkFSUG1zejErZWVEU0RXQkFrVTcreXBxbWVYSjJRcz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2MzU5cG9KTFJUSjEvL2dBVW1UQXd5VHFHL2VCTFVqM0U1R1FQM21ZaXdoMSsvZnlsTDV3YVVRL05wQXV5MkhvblZjTFBtODhzYmRXU05FZ003RW5CZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQMDRBcS80US9KaE9vaDZyT0RKanZjV2g4WGpORjhHUUxMOVg4VnNYaUNDalJiTlhnWjREL1A5VWE0dHZ6RzlZd2Zoa3NRZDBBVis5d0N3bmlzSW5pQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwNDY2OTg5NzI6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ0OTM0NTRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "It's x Burhan",
  ownername:process.env.OWNER_NAME|| "it's x Burhan",


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
