document.addEventListener('DOMContentLoaded', () => {
  console.log("Popup DOM fully loaded and parsed.");

  const userInputField = document.getElementById('userInput');
  const content = document.querySelector('.content');
  const response = document.querySelector('.response');
  const responseText = response.querySelector('.response-input');
  const fileButton = document.querySelector('.type:nth-child(1)');
  const closeButton = document.querySelector('.options img:nth-child(3)');
  const reduceButton = document.querySelector('.options img:nth-child(1)');
  const moreCrossButton = document.querySelector('.onglet img');
  const logoButton = document.querySelector('.logo img');

  if (userInputField) {
    userInputField.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        content.style.display = 'none';
        response.style.display = 'block';
        responseText.textContent = "Bonjour ! Comment puis-je vous aider aujourd'hui ?";
      }
    });
  } else {
    console.log('Le champ de saisie n\'a pas été trouvé.');
  }

  if (fileButton) {
    fileButton.addEventListener('click', () => {
      content.style.display = 'block';
      response.style.display = 'none';
      userInputField.value = '';
      responseText.textContent = '';
    });
  } else {
    console.log('Le bouton Fichier n\'a pas été trouvé.');
  }

  if (logoButton) {
    logoButton.addEventListener('click', () => {
      content.style.display = 'block';
      response.style.display = 'none';
      userInputField.value = '';
      responseText.textContent = '';
    });
  } else {
    console.log('Le bouton Fichier n\'a pas été trouvé.');
  }

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      window.close();
    });
  } else {
    console.log('Le bouton Close n\'a pas été trouvé.');
  }

  if (reduceButton) {
    reduceButton.addEventListener('click', () => {
      chrome.windows.getCurrent(function(currentWindow) {
        chrome.windows.update(currentWindow.id, { state: 'minimized' });
      });
    });
  } else {
    console.log('Le bouton Reduce n\'a pas été trouvé.');
  }

  if (moreCrossButton) {
    moreCrossButton.addEventListener('click', () => {
      window.close();
    });
  } else {
    console.log('Le bouton More Cross n\'a pas été trouvé.');
  }
});
