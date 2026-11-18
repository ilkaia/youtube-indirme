import { useState } from 'react';
import { X, Send, Sparkles, Command, Download, FileText, HelpCircle } from 'lucide-react';

const YouTubeAIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'assistant', 
      text: 'Merhaba! Ben Asistana Sor. YouTube video indirme, dönüştürme ve araçlarımız hakkında size nasıl yardımcı olabilirim?' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Ana Hızlı Komutlar
  const quickCommands = [
    { label: '📥 Video Nasıl İndirilir?', prompt: 'YouTube videolarını buradan nasıl indirebilirim?' },
    { label: '🎵 MP3 Dönüştürme', prompt: 'Videoları ses (MP3) formatına nasıl çevirebilirim?' },
    { label: '⚡ Hız / Kalite Sorunu', prompt: 'İndirme sırasında kalite veya hız sorunu yaşıyorum, ne yapmalıyım?' },
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage = textToSend;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Vite ortam değişkeninden Gemini API anahtarını alıyoruz
      // .env dosyanıza VITE_GEMINI_API_KEY=your_key eklemelisiniz
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        setMessages(prev => [
          ...prev,
          { 
            role: 'assistant', 
            text: '⚠️ Gemini API anahtarı bulunamadı. Lütfen `.env` dosyanıza `VITE_GEMINI_API_KEY` tanımlayın.' 
          }
        ]);
        setIsLoading(false);
        return;
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Sen YouTube video indirme ve araçlar web sitesinin yapay zeka asistanısın. Adın "Asistana Sor". Kullanıcılara kısa, net ve yardımsever Türkçe yanıtlar ver.\n\nKullanıcı Sorusu: ${userMessage}`
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await response.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Üzgünüm, şu anda yanıt oluşturamadım.';

      setMessages(prev => [...prev, { role: 'assistant', text: aiResponse }]);
    } catch (error) {
      console.error('Gemini API Hatası:', error);
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: 'Bağlantı sırasında bir hata oluştu. Lütfen tekrar deneyin.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget Açma Butonu */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
          aria-label="Asistana Sor"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-medium">
            Asistana Sor
          </span>
        </button>
      )}

      {/* Sohbet Penceresi */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[520px] transition-all">
          {/* Header */}
          <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-red-400" /> Asistana Sor
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mesaj Akışı */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 rounded-xl ${
                    msg.role === 'user'
                      ? 'bg-red-600 text-white rounded-br-none'
                      : 'bg-slate-800 text-slate-200 rounded-bl-none border border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-800 text-slate-400 px-3.5 py-2.5 rounded-xl rounded-bl-none border border-slate-700 text-xs animate-pulse">
                  Asistan düşünüyor...
                </div>
              </div>
            )}
          </div>

          {/* Ana Komutlar / Hızlı Butonlar */}
          <div className="px-3 py-2 bg-slate-900/80 border-t border-slate-800 flex gap-1.5 overflow-x-auto no-scrollbar">
            {quickCommands.map((cmd, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(cmd.prompt)}
                className="bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs px-2.5 py-1.5 rounded-lg whitespace-nowrap border border-slate-700 transition-colors cursor-pointer flex-shrink-0"
              >
                {cmd.label}
              </button>
            ))}
          </div>

          {/* Mesaj Giriş Formu */}
          <form onSubmit={handleSubmit} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Asistana bir şeyler sorun..."
              className="flex-1 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-sm border border-slate-700 focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white p-2 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default YouTubeAIWidget;
