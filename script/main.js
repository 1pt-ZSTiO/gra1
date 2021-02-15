import * as GameLogic from "./game-logic.js";



setInterval(GameLogic.autoClicker,1000); //pracownicy co klikają za cb

document.getElementById("button").onclick = function(){
    GameLogic.onClick();

    console.log(GameLogic.data.project_progress);
}


/*
GameLogic.loadGame();
window.onbeforeunload = function(){
    GameLogic.saveGame();
 }*/