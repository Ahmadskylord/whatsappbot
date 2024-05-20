global.d = new Date()
global.calender = d.toLocaleDateString('id')

// --------------- INFO OWNER ------------- //
global.prefix = "." // command prefix
global.ownNumb = "6285601059864" // isi no kalian
global.ownName = "https://ī.am/DaffzOffc" // isi nama kalian
global.namaCreator ="https://ī.am/DaffzOffc"
global.versionSc ="5.0"
global.namaBot ="𝘿𝘼𝙁𝙁𝙕 V5"
global.linkgc ="https://chat.whatsapp.com/IxxGZuyKOOlICvAQiKDIPv"
global.namaproduk ="BY 𝘿𝘼𝙁𝙁𝙕𝙓𝘿"
global.namaStore ="𝘿𝘼𝙁𝙕𝙕𝙓𝘿 𝙅𝘽"


// --------------- BATAS INFO OWNER------------- //

//____________global apikey_________//

global.lol = 'GataDios' // ISI APIKEY LOL HUMAN LU

//_____________global payment_______//
global.Qris = 'https://telegra.ph/file/74bb8f1625082b28c11e1.jpg'
global.dana = '081573705028'
global.gopay = '081213173644'
global.scan = 'sᴄᴀɴ ǫʀɪs ᴀʟʟ ᴘᴀʏᴍᴇɴᴛ ᴅɪ ᴀᴛᴀs'

//__________________ʙᴀᴛᴀs ᴘᴀʏᴍᴇɴᴛ_____________//

global.domain = 'https://daffzshop.panelkuuu.xyz' // Isi Domain Lu
global.apikey = 'ptla_O3GuawzEFn2DzUjYT3VGiV6dQb1BudVseU5IqQUkng0' // Isi Apikey Plta Lu
global.capikey = 'ptlc_2pOaFyrWjw8DTY9P21kN5PK8n6NJFKoTr9CjHqp9Vdq' // Isi Apikey Pltc Lu
global.eggsnya = '15' // id eggs yang dipakai
global.location = '1' // id location

//__________________GLOBAL TESTI_______________//

global.testi ='https://whatsapp.com/channel/0029VaaNe63ICVfgrH9gzW32' // ISI URL TESTI KALIAN
global.text1 ='ITU TESTI 𝘿𝘼𝙁𝙁𝙕𝙓𝘿 KAK' // UBH AJA JADI NAMA MU
global.text2 ='GA BANG? AMAN DONG' // G SH DI HPS

//______________BATAS TESTI_____________//


// --------------- GLOBAL MESS ------------- //
global.mess = {
     delay: '4000', // Set Jeda Atur Di sini 1000 = 1 detik
     eror: 'lagi eror kak maaf ha', 
     wait: 'Wait Kak Lagi Proses',
     group: 'Maaf Kak Fitur Ini Hanya Bisa Digunakan Di Dalam Group', 
     owner: 'lu siapa?\n*GAUSAH SO ASIK*',
     group: "khusus di dalam group",
     inf: "𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗦𝗜 ⚠️\n› sc ini di recode oleh DaffzXD\n› jangan lupa subs yt saya\n› sc ini dijual [ MINAT CALL ME ]\n› happfun your day\n\n𝗥𝗨𝗟𝗘𝗦 𝗣𝗨𝗦𝗛 ‼️\n› maximal push 1 GC isinya 2k member\n  kalo mau di ubah di cofig.js\n› untuk fitur push yg gada set jeda nya\n  gua setting standard [ 3000 ] kalo mau\n  di ubah tinggal cek di file config.js\n› My *Daffa Adhitama*\n\n\n*LINK TELE :*\n\nhttps://t.me/DafzzXD\n\n*𝘿𝘼𝙁𝙁𝙕𝙓𝘿 𝙊𝙁𝙁𝘾:*\n\nhttps://wa.me/6285601059864"
}
// --------------- BATAS GLOBAL MESS ------------- //

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log(__filename+' updated!')
	delete require.cache[file]
	require(file)
})

/*
// --------------- ABOUT SC------------- //
  › SCWA BY 𝘿𝘼𝙁𝙁𝙕𝙓𝘿 𝙊𝙁𝙁𝘾
  › BAILEYES WHISKY
  › PAPIRING CODE 
  › TQ TO
    - Alfa05
    - Quin
    - ZERONE
*/