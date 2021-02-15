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

export function saveGame(){
    localStorage.setItem("money",       data.money              );
    localStorage.setItem("auto_clicks", data.auto_clicks        );
    localStorage.setItem("progress",    data.project_progress   );
    localStorage.setItem("multiplier",  data.click_multiplier   );

    let project = data.current_project;

    localStorage.setItem("prj_effort",  project.effort          );
    localStorage.setItem("prj_name",    project.name            );
    localStorage.setItem("prj_reward",  project.reward          );
}

export function loadGame(){
    data.money 				= localStorage.getItem("money"        );
    data.auto_clicks 		= localStorage.getItem("auto_clicks"  );
    data.project_progress 	= localStorage.getItem("progress"     );
    data.click_multiplier 	= localStorage.getItem("multiplier"   );

    let effort 	= localStorage.getItem("prj_effort"	);
    let name 	= localStorage.getItem("prj_name"  	);
    let reward 	= localStorage.getItem("prj_reward"	);

	data.current_project = new Project(reward,effort,name);


	if (data.money && data.click_multiplier)
		return;
	//Jeśli zapis nie istnieje ustaw wartość domyślną
	
	data = { 
		project_progress : 0,
		current_project : new Project(1000, 100, "TEST"),
		money : 0,
		auto_clicks : 0,
		click_multiplier : 1,    
	}	
}
