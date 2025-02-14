# frozen_string_literal: true

require 'telegram/bot'

class TelegramMessageService
  def initialize
    @token = '8124812255:AAGHnXAKmhmIvMRLMvLfPByYlmrMJG1ptHQ'
    @bot = Telegram::Bot::Client.new(@token)
  end

  def send_message(chat_id, text)
    @bot.api.send_message(chat_id: chat_id, text: text)
  end

end