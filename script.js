// Dark/light mode toggle

// Get the toggle button and the <body> element
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Update the button text so it matches the current theme
function updateButtonText() {
  toggleButton.textContent = body.classList.contains('dark') ? 'Light mode' : 'Dark mode';
}

// Switch between light and dark theme when the button is clicked
function toggleTheme() {
  body.classList.toggle('dark'); // add or remove the "dark" class
  updateButtonText();
}

// Listen for clicks on the button
toggleButton.addEventListener('click', toggleTheme);

// Set the correct text when the page first loads
updateButtonText();
