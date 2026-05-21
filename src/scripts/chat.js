// RU: Конфигурация и базовая логика модуля чатов.
// EN: Configuration and base logic for the chat module.

window.BAIKAL_CHAT = {
  features: [
    "private-chats",
    "group-chats",
    "voice-messages",
    "emoji",
    "read-status",
    "offline-history"
  ],
  currentRoom: "Круг Байкала",
  states: [
    "default",
    "premium-room",
    "offline-sync",
    "voice-message"
  ]
};
