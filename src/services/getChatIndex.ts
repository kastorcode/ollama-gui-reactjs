export default function getChatIndex () {
  const chatParam = window.location.pathname.split('/')[2]
  if (!chatParam) return 0
  const chatParsed = parseInt(chatParam)
  if (isNaN(chatParsed)) return 0
  if (chatParsed < 1) return 0
  return chatParsed - 1
}