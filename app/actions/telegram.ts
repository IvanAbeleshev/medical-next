'use server';

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  comments?: string;
}

export async function sendToTelegram(formData: ContactFormData) {
  // Получаем токен бота и chat IDs из переменных окружения
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = process.env.TELEGRAM_CHAT_IDS; // Теперь используем CHAT_IDS вместо CHAT_ID

  if (!botToken || !chatIds) {
    console.error('Telegram bot token or chat IDs not configured');
    return { success: false, error: 'Telegram configuration missing' };
  }

  // Парсим chat IDs (они должны быть разделены запятыми)
  const chatIdArray = chatIds.split(',').map(id => id.trim()).filter(id => id);

  // Формируем сообщение
  const message = `
🏥 *Новая заявка с сайта медицинского центра*

👤 *Имя:* ${formData.firstName} ${formData.lastName}
📞 *Телефон:* ${formData.phone}
${formData.comments ? `💬 *Комментарий:* ${formData.comments}` : ''}

📅 *Дата заявки:* ${new Date().toLocaleString('uk-UA')}
  `.trim();

  try {
    // Отправляем сообщение всем получателям
    const sendPromises = chatIdArray.map(async (chatId) => {
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
        console.error(`Telegram API error for chat ${chatId}:`, errorData);
        return { success: false, chatId, error: errorData };
      }

      return { success: true, chatId };
    });

    // Ждем завершения всех отправок
    const results = await Promise.allSettled(sendPromises);
    
    // Проверяем результаты
    const successful = results.filter(result => 
      result.status === 'fulfilled' && result.value.success
    ).length;
    
    const failed = results.length - successful;

    if (failed === 0) {
      return { success: true, sent: successful };
    } else if (successful > 0) {
      console.warn(`Partial success: ${successful} sent, ${failed} failed`);
      return { 
        success: true, 
        sent: successful, 
        failed,
        warning: 'Some messages failed to send' 
      };
    } else {
      return { success: false, error: 'All messages failed to send' };
    }
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return { success: false, error: 'Network error' };
  }
}
