import { useEffect } from 'react';

const YouTubeAIWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://ilkaia.github.io/hadi-bunu-yapalim-now/widget-embed.js';
    script.async = true;
    document.head.appendChild(script);
    
    // Function to remove widget backgrounds
    const removeWidgetBackgrounds = () => {
      // Wait for widget to load and try multiple times
      const attempts = [100, 500, 1000, 2000, 3000];
      
      attempts.forEach(delay => {
        setTimeout(() => {
          // Target all possible widget elements
          const selectors = [
            '#youtube-ai-widget-chat-window',
            '.youtube-ai-widget-container',
            '.youtube-ai-widget-overlay',
            '[class*="youtube-ai-widget"]',
            '[id*="youtube-ai-widget"]',
            // Additional selectors for common widget patterns
            '.widget-container',
            '.chat-widget',
            '.ai-widget',
            '.floating-widget'
          ];
          
          selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
              if (element instanceof HTMLElement) {
                // Remove backgrounds and shadows
                element.style.setProperty('background-color', 'transparent', 'important');
                element.style.setProperty('background', 'transparent', 'important');
                element.style.setProperty('box-shadow', 'none', 'important');
                element.style.setProperty('backdrop-filter', 'none', 'important');
                element.style.setProperty('border', 'none', 'important');
                
                // Also check for nested elements that might have backgrounds
                const nestedElements = element.querySelectorAll('*');
                nestedElements.forEach(nested => {
                  if (nested instanceof HTMLElement) {
                    // Only remove background if it's white or light colored
                    const computedStyle = window.getComputedStyle(nested);
                    const bgColor = computedStyle.backgroundColor;
                    
                    if (bgColor === 'rgb(255, 255, 255)' || 
                        bgColor === 'rgba(255, 255, 255, 1)' ||
                        bgColor === 'white' ||
                        bgColor.includes('255, 255, 255')) {
                      nested.style.setProperty('background-color', 'transparent', 'important');
                      nested.style.setProperty('background', 'transparent', 'important');
                    }
                  }
                });
              }
            });
          });
          
          // Also use MutationObserver to catch dynamically added elements
          if (delay === 1000) { // Set up observer after initial attempts
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                  if (node instanceof HTMLElement) {
                    // Check if the added node or its children match widget patterns
                    const widgetElements = node.querySelectorAll('[class*="widget"], [id*="widget"]');
                    widgetElements.forEach(element => {
                      if (element instanceof HTMLElement) {
                        element.style.setProperty('background-color', 'transparent', 'important');
                        element.style.setProperty('background', 'transparent', 'important');
                        element.style.setProperty('box-shadow', 'none', 'important');
                      }
                    });
                  }
                });
              });
            });
            
            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
            
            // Clean up observer after 10 seconds
            setTimeout(() => observer.disconnect(), 10000);
          }
        }, delay);
      });
    };
    
    // Start the background removal process
    removeWidgetBackgrounds();
    
    return () => {
      if ((window as any).YouTubeAIWidget) {
        (window as any).YouTubeAIWidget.remove();
      }
    };
  }, []);

  return null;
};

export default YouTubeAIWidget;