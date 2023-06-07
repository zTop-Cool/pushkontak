const chalk = require("chalk")
const fs = require("fs")

global.ownerNumber = ["6288802527317@s.whatsapp.net"]
global.nomerOwner = "6288802527317"
global.nomorOwner = ['6288802527317']
global.nameGEDE = "zSky STORE"
global.namaDeveloper = "zSky STORE"
global.namaBot = "zSky WhatsApp"
global.packname = ""
global.author = "Sticker By zSky STORE"
global.thumb = fs.readFileSync("./thumb.png")

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

