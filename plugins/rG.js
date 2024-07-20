let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = `
*❒═════[طلبية شراء جهاز جديد]═════❒*
*┬*
*├❧ صاحب الطلبيه:* wa.me/${m.sender.split`@`[0]}
*┴*
*┬*
*├❧ الطلبيه:* ${text}
*┴*
`

conn.reply('201554195643@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})

conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})

m.reply(`*[ ✔️ ] تم تقديم طلبك بنجاح سوف يتم التواصل معك/ي في اقرب وقت ممكن*`)
}
handler.command = /^(شراء-ج)$/i
export default handler