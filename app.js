let rackTiles = [];
let player1;
let player2;
window.play1;
window.play2;
function backToRack() {
    location.href = "./gameover.html"
}

function helpBox() {
    location.href = "./inst.html"
}

function start() {
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    onLoadGame();
    

}
function onLoadGame(){
    window.play1=player1;
    window.play2=player2;
    console.log(play1)
    console.log(play2)
    window.location.href = "./game.html";
}


