function onBeginClicked() {
    console.log('Begin button clicked');
}

function initialize() {
    document.getElementById('begin').addEventListener('click', onBeginClicked);
}