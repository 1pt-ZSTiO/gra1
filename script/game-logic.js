import {Project} from "./projects";

let game_end = false

let project_progress = 0;
let clicks = 0;
let current_project = new Project(1000, 100, "TEST");

let money = 0;
let auto_clicks = 0;
let click_multiplier = 1;


//Dodatkowe klikanie (pracownicy)
export function autoClicker(){
    clicks += auto_clicks;
    checkProgress();
}
//Obsługa kliknięcia gracza
export function onClick() {
    clicks += click_multiplier;
    checkProgress();
}

function checkProgress(){
    if(!current_project)
        return;

    project_progress = (clicks / current_project.effort) * 100;

    if(project_progress >= 100){
        money += current_project.reward;

        clicks = 0;
        current_project = undefined;
        project_progress = 0;
    }
}


export {
    current_project,
    project_progress,
    money,
    click_multiplier,
    auto_clicks
};
