import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Barcha maydonlar talab qilinadi" }, { status: 400 })
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error("Telegram environment variables not set")
      return NextResponse.json({ error: "Server konfiguratsiyasi xatosi" }, { status: 500 })
    }

    // Format message for Telegram
    const telegramMessage = `
📧 <b>Yangi Xabar</b>

👤 <b>Ism:</b> ${escapeHtml(name)}
📨 <b>Email:</b> ${escapeHtml(email)}
💬 <b>Xabar:</b>
${escapeHtml(message)}
    `.trim()

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    if (!telegramResponse.ok) {
      throw new Error("Telegramga xabar yuborishda xato")
    }

    return NextResponse.json({ success: true, message: "Xabar muvaffaqiyatli yuborildi!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending message:", error)
    return NextResponse.json({ error: "Xabar yuborishda xato yuz berdi" }, { status: 500 })
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
