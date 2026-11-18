import { useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';

const YouTubeAIWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'Merhaba! YouTube video indirme ve araçlar hakkında size nasıl yardımcı olabilirim?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');

    // Örnek yapay zeka/asistan yanıt simülasyonu
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', text: `"${userMsg}" talebiniz alındı. İlgili YouTube araçlarımız üzerinden işlemlerinizi hızlıca gerçekleştirebilirsiniz!` }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Widget'ı Açan Sabit Buton */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group cursor-pointer"
          aria-label="AI Asistanını Aç"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-sm font-medium">
            YouTube AI Asistan
          </span>
        </button>
      )}

      {/* Widget Sohbet Penceresi */}
      {isOpen && (
        <div className="bg-slate-900 border border-slate-700 w-80 sm:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[450px] transition-all">
          {/* Header */}
          <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
              <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-red-400" /> YouTube AI Asistan
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mesaj Alanı */}
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
          </div>

          {/* Mesaj Gönderme Formu */}
          <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-slate-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Bir şeyler sorun..."
              className="flex-1 bg-slate-900 text-white px-3.5 py-2 rounded-xl text-sm border border-slate-700 focus:outline-none focus:border-red-500"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-xl transition-colors flex items-center justify-center cursor-pointer"
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
