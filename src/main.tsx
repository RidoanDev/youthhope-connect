
import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Content protection
const disableContextMenu = (e: MouseEvent) => {
  e.preventDefault();
};

const disableKeyboardShortcuts = (e: KeyboardEvent) => {
  // Disable common screenshot and copy shortcuts
  if (
    (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) || // Chrome DevTools screenshot
    (e.key === 'PrintScreen') || // Print Screen
    (e.metaKey && e.shiftKey && e.key === '3') || // Mac screenshot (full)
    (e.metaKey && e.shiftKey && e.key === '4') || // Mac screenshot (partial)
    (e.metaKey && e.shiftKey && e.key === '5') || // Mac screenshot & recording
    (e.ctrlKey && e.key === 'p') || // Print
    (e.metaKey && e.key === 'p') || // Mac print
    (e.ctrlKey && e.shiftKey && e.key === 'I') || // DevTools
    (e.ctrlKey && e.shiftKey && e.key === 'J') || // Console
    (e.ctrlKey && e.shiftKey && e.key === 'C') || // Inspect Element
    (e.key === 'F12') // DevTools
  ) {
    e.preventDefault();
    return false;
  }
};

const ProtectedApp = () => {
  useEffect(() => {
    document.addEventListener('contextmenu', disableContextMenu);
    document.addEventListener('keydown', disableKeyboardShortcuts);

    // Disable screenshot via CSS (additional layer)
    document.body.style.cssText += '-webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;';

    // Disable drag and drop
    document.addEventListener('dragstart', (e) => e.preventDefault());

    // Blur page when user tries to take screenshot (works on some browsers)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        document.body.style.filter = 'blur(10px)';
      } else {
        setTimeout(() => {
          document.body.style.filter = 'none';
        }, 100);
      }
    });

    // Detect screen recording (limited support)
    if ('getDisplayMedia' in navigator.mediaDevices) {
      const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia;
      navigator.mediaDevices.getDisplayMedia = function() {
        alert('Screen recording is disabled on this website.');
        return Promise.reject(new Error('Screen recording disabled'));
      };
    }

    return () => {
      document.removeEventListener('contextmenu', disableContextMenu);
      document.removeEventListener('keydown', disableKeyboardShortcuts);
    };
  }, []);

  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProtectedApp />
  </StrictMode>
);
