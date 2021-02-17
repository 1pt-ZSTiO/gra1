import {refreshProjectList} from "./display.js";
import * as GameLogic from "./game-logic.js";

const project_limit = 5;

//Projekty które gracz może wykonywać w zamian za pieniądze
export class Project{
    constructor(reward, effort, name){
        this.effort = effort;
        this.reward = reward;
        this.name   = name;
    }
}

/*
@param difficulty - how many clicks it takes
*/
function randomProject(difficulty){
    let reward = 
    Math.round(
        difficulty * 
        (
            2 + 
            (
                Math.floor
                (
                    (Math.random() - 0.5) * 1000
                ) 
                / 1000
            )
        )
    );
    reward += Math.round(Math.exp(difficulty/800));  
    
    //round the end
    reward = Math.ceil(reward / 10) * 10;
    
    //reward is difficulty *2. random

    let name = projectNames[
        Math.floor(Math.random()*projectNames.length)
    ];
    //random project name

    return new Project(reward,difficulty,name);
}

export function generateRandomProject(){
    //delete random project if limit is reached
    if (project_list.length >= project_limit) {

        project_list.splice(            
            Math.floor(Math.random()*projectNames.project_list),
            1
        );         
                
    }

    let min = 100;
    let max = 1200 + 100 * GameLogic.data.click_multiplier * (Math.exp(GameLogic.data.auto_clicks / 100) / 100);

    if(max > 4000) {
        max = 4000;
        min = 500;
    }

    let difficulty = min + Math.floor((max - min) * Math.random()); // ammount of user clicks


    project_list.push(randomProject(difficulty));
    refreshProjectList();

}

export let project_list = [];

const projectNames = [
    "Platformer game",
    "First person shooter",
    "Game engine",
    "Real Time Strategy",
    "Racing Game",
];