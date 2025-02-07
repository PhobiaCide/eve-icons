function darkMode() {
  let { body } = document;
  body.classList.toggle(`dark-mode`);
}

function include(filePath) {
  let request = new XMLHttpRequest();
  request.onreadystatechange = () =>
    request.readyState === 4 && request.status === 200
      ? document.currentScript.insertAdjacentHTML(
          'beforebegin',
          request.responseText
        )
      : null;
  request.open('GET', filePath, true);
  request.send();
}

document.querySelector(`input`).onclick = () =>
	(document.body.hasAttribute(`class`)) 
  	? document.body.removeAttribute(`class`)
    : document.body.setAttribute(`class`, `blur-bgimage`); 