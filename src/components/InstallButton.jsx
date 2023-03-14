import React, { useEffect } from 'react';

const style = {
  backgroundColor: '#0bda51',
  border: 'none',
  borderRadius: '0.3rem',
  padding: '0.2em',
  paddingLeft: '0.6em',
  paddingRight: '0.6em',
  margin: '0.5rem'
};

export default function InstallButton() {
  useEffect(() => {
    let deferredPrompt;
    const addBtn = document.querySelector('#install-button');
    addBtn.style.display = 'none';

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = 'block';

      addBtn.addEventListener('click', (e) => {
        // hide our user interface that shows our A2HS button
        addBtn.style.display = 'none';
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.info('User accepted the A2HS prompt');
            window.location.reload();
          } else {
            console.info('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
      });
    });
  }, []);
  return (
    <button style={style} id="install-button">
      Установить приложение
    </button>
  );
}
