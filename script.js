let totalTile = 225;
let list={};
let char;
let play1score=document.getElementById("playerOneScore");
let play2score=document.getElementById("playerTwoScore");
let whoPlaying;
play1score.innerHTML=0;
play2score.innerHTML=0;
function createTileBag() {
    document.getElementById("demo").innerHTML = totalTile;
    let table = document.createElement('table');
    table.setAttribute("border", '2px');
    let tbody = document.createElement('tbody');
    for (let y = 0; y < 15; ++y) {
        let tr = document.createElement('tr');
        for (let x = 0; x < 15; ++x) {
            list[`a${y}${x}`]="0";
            let td =document.createElement('td');
            let h =document.createElement('div');
            h.setAttribute("id",`a${y}${x}`);
            h.setAttribute("onclick",`clickTile("a${y}${x}")`);
            h.innerHTML=list[`a${y}${x}`];
            td.appendChild(h);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    table.style.width = '250px';
    table.style.height = '250px';
    table.style.justifyContent = 'center';
    table.style.alignItems = 'center';
    const element = document.getElementById('grid');
    element.appendChild(table);
    console.log(list);
}
createTileBag();
function showTiles() {
    let row = document.createElement("div");
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let charactersLength = characters.length;
    for (let i = 0; i < 5; i++) {
        let button = document.createElement("button");
        button.setAttribute("id",`btn${i}`);
        let r = characters.charAt(Math.floor(Math.random() * charactersLength));
        button.innerHTML = r;
        button.setAttribute("onclick", `clickA("${r}",${i})`);
        row.append(button);
    }
    row.setAttribute("border", '2px');
    row.setAttribute("class", "flex");
    let tile = document.getElementById("tile3");
    tile.appendChild(row);
}

function clickTile(path){
  if(char!='')
  {
  list[path]=char;
  document.getElementById(path).innerHTML=char;
  char='';
  play1score.innerHTML=parseInt(play1score.innerHTML)+1;
  totalTile=totalTile-1;
  document.getElementById("demo").innerHTML = totalTile;

}
}

function refresh(){
    for(let i=0;i<15;i++){
        for(let j=0;j<15;j++){
            list[`a${i}${j}`]="";

        }
    }
    for(let i=0;i<5;i++){
        document.getElementById(`btn${i}`).disabled=false;
        document.getElementById(`btn${i}`).style.cursor='pointer';

    }
    alert("Tile is refreshed");
}

function submit(){

}

function clickA(r,i) {
    char=r;
  document.getElementById(`btn${i}`).disabled=true;
  document.getElementById(`btn${i}`).style.cursor='not-allowed';
}