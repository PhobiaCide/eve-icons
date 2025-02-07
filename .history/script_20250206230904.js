function darkMode() {
  const toggleButton = document.querySelector('#dark-light-toggle .button-front');
  const body = document.body;

  const buttonText = toggleButton.innerText;
  if (buttonText === 'dark') {
  toggleButton.innerText =  'light';
  body.dataset.bsTheme = 'light';
  document.getElementById('topcoat').href = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-light.min.css';
  } else {
    
    toggleButton.innerText = "dark";
    body.dataset.bsTheme = 'dark';
    document.getElementById('topcoat').href = 'https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/css/topcoat-mobile-dark.min.css';
  }
}
