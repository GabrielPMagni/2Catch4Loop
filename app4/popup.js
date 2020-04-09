function act() {
    chrome.tabs.executeScript({
      file: "script.js"
    }); 
}

// function apontar() {
//   chrome.tabs.executeScript({
//       file: "dwlmp4.js"
//   });
// }

// function fogo() {
//   chrome.tabs.executeScript({
//       file: "salvar.js"
//   });
// }

document.getElementById('act').addEventListener('click', act);
// document.getElementById('apontar').addEventListener('click', apontar);
// document.getElementById('fogo').addEventListener('click', fogo);

