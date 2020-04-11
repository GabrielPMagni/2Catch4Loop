function act() {
    chrome.tabs.executeScript({
      file: "script.js"
    }); 
}

document.getElementById('act').addEventListener('click', act);

