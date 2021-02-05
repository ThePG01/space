let handler = function (m) {
  if (!m.quoted) throw 'Reply message bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'Hanya bisa menghapus pesan dariku wlee'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot jadi ga bisa!''
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
