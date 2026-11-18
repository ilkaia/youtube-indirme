import { useEffect, useState } from 'react';

const YouTubeAIWidget = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ilkaia.github.io/hadi-bunu-yapalim-now/widget-embed.js';
    script.async = true;

    script.onload = () => {
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsLoading(false);
      setHasError(true);
      console.error("Widget script yüklenemedi.");
    };

    document.head.appendChild(script);

    return () => {
      // Güvenli temizleme kontrolü
      try {
        if (window.YouTubeAIWidget && typeof (window.YouTubeAIWidget as any).remove === 'function') {
          (window.YouTubeAIWidget as any).remove();
        }
      } catch (e) {
        console.error("Widget kaldırılırken hata oluştu:", e);
      }

      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div id="youtube-ai-widget-container" className="relative z-50">
      {/* Widget'ın DOM üzerinde konumlanabilmesi için gerekli alan */}
      {hasError && (
        <div className="text-red-500 text-xs hidden">Widget yüklenemedi.</div>
      )}
    </div>
  );
};

export default YouTubeAIWidget;
