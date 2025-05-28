'use server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  comments?: string;
}

export async function sendToTelegram(formData: ContactFormData) {
  // Получаем токен бота и chat ID из переменных окружения
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error('Telegram bot token or chat ID not configured');
    return { success: false, error: 'Telegram configuration missing' };
  }

  // Формируем сообщение
  const message = `
🏥 *Новая заявка с сайта медицинского центра*

👤 *Имя:* ${formData.firstName} ${formData.lastName}
📞 *Телефон:* ${formData.phone}
${formData.email ? `📧 *Email:* ${formData.email}` : ''}
${formData.comments ? `💬 *Комментарий:* ${formData.comments}` : ''}

📅 *Дата заявки:* ${new Date().toLocaleString('uk-UA')}
  `.trim();

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return { success: false, error: 'Failed to send message to Telegram' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return { success: false, error: 'Network error' };
  }
}
