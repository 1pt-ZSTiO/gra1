import {Project} from "./projects.js";

let game_end = false
let clicks = 0;
export var data = { 
    project_progress : 0,
    current_project : new Project(1000, 100, "TEST"),
    money : 0,
    auto_clicks : 0,
    click_multiplier : 1,    
}


//Dodatkowe klikanie (pracownicy)
export function autoClicker(){
    clicks += data.auto_clicks;
    checkProgress();
}
//Obsługa kliknięcia gracza
export function onClick() {
    clicks += data.click_multiplier;
    checkProgress();//
}

function checkProgress(){
    if(!data.current_project)
        return;

        data.project_progress = Math.round(clicks / data.current_project.effort * 100);

    if(data.project_progress >= 100){
        data.money += data.current_project.reward;

        clicks = 0;
        data.current_project = undefined;
        data.project_progress = 0;
    }
}

