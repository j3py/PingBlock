let toggleBlock = document.getElementById('toggleBlock');

chrome.storage.sync.get('state', function(data) {
    if(data === 'on'){
        toggleBlock.style.backgroundColor = "gray";
        toggleBlock.innerText = "Turn On";
    } else {
        toggleBlock.style.backgroundColor = "white";
        toggleBlock.innerText = "Turn Off";
    }
});