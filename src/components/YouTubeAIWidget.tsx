import { useEffect } from 'react';

const YouTubeAIWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ilkaia.github.io/hadi-bunu-yapalim-now/widget-embed.js';
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      if ((window as any).YouTubeAIWidget) {
        (window as any).YouTubeAIWidget.remove();
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default YouTubeAIWidget;
