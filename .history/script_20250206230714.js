function darkMode() {
  const toggleButton = document.querySelector('#dark-light-toggle .button-front');
  const body = document.body;

  const buttonText = toggleButton.innerText;
  if (buttonText === 'dark') {
  toggleButton.innerText =  'light';
  body.dataset.bsTheme = 'light';
  } else {
    
    toggleButton.innerText = "dark";
    body.dataset.bsTheme = 'dark';
  }
}
