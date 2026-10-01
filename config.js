// Точки подключения внешних сервисов. Browser TTS работает бесплатно и без ключей.
window.HISTORY_CONFIG = {
  didAgent: {
    enabled: true,
    agentId: 'v2_agt_HUTMZ9e7',
    clientKey: 'ck_N3omtzg6w_CASkFECrjPa',
    provider: 'D-ID Agents Embed v2',
    shareUrl: 'https://studio.d-id.com/agents/share?id=v2_agt_HUTMZ9e7&utm_source=copy&key=Y2tfTjNvbXR6ZzZ3X0NBU2tGRUNyalBh'
  },
  aiEndpoint: null,  // POST {mode, topic, materials, conversation, session, message} -> {reply, classification?, followUp?, score?}
  sttEndpoint: null, // POST multipart/form-data с полем audio -> {text}
  ttsEndpoint: null, // POST {text, voice, style} -> аудиофайл
  browserTts: {
    enabled: false,
    lang: 'ru-RU',
    rate: 0.9,
    pitch: 0.85
  },
  // Серверный proxy для D-ID Talks. Ключ D-ID хранится только на сервере.
  // POST {text, sourceImage, voice, style} -> {videoUrl}; видео уже содержит голос и lip-sync.
  avatarEndpoint: null,
  peterSourceImage: null,
  textbook: {
    title: 'История России. XVIII — начало XIX века. 8 класс',
    authors: 'В. Р. Мединский, А. В. Торкунов',
    status: 'awaiting-manual-upload',
    knowledgeEndpoint: null
  }
};
