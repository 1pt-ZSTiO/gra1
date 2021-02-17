import * as GameLogic from "./game-logic.js";
import {generateRandomProject} from "./projects.js";
import {refreshProjectList} from "./display.js";


setInterval(GameLogic.autoClicker,1000); //pracownicy co klikają za cb

setInterval(generateRandomProject, 1000 * 10);

document.getElementById("button").onclick = function(){
    GameLogic.onClick();    
}

GameLogic.data.auto_clicks = 1000;

/*
GameLogic.loadGame();
window.onbeforeunload = function(){
    GameLogic.saveGame();
 }*/