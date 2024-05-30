document.addEventListener('DOMContentLoaded', () => {
  console.log("Popup DOM fully loaded and parsed.");

  const userInputField = document.getElementById('userInput');
  const content = document.querySelector('.content');
  const response = document.querySelector('.response');
  const responseText = response.querySelector('.response-input');

  if (userInputField) {
    userInputField.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        const userInput = userInputField.value;
        content.style.display = 'none';
        response.style.display = 'block';
        responseText.textContent = "Bonjour";
        console.log("Enter key pressed, userInput:", userInput);
      }
    });
  } else {
    console.log('Le champ de saisie n\'a pas été trouvé.');
  }
});
