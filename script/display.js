import * as GameLogic from "./game-logic.js";
import {Project,project_list} from "./projects.js";

function addAvaliableProject(project) {   
    const projectElement = document.createElement("div");
    projectElement.setAttribute('class','project');
    projectElement.innerHTML = `        
        <h2>${project.name}</h2>
        <p>
            Reward: ${project.reward} Effort: ~${Math.round(project.effort/100)*100} clicks
        </p>
    `;

    projectElement.onclick = function(){
        if(GameLogic.data.current_project)
            return;

        GameLogic.data.current_project = project;

        let compare = GameLogic.data.current_project;
        let index = project_list.findIndex((ele)=>{return (ele.effort == compare.effort && compare.name == ele.name)});
        project_list.splice(index,1);     

        refreshProjectList();        
    };

    document.querySelector("#tasks-list").appendChild(projectElement);
}

export function refreshProjectList() {
    document.querySelector("#tasks-list").innerHTML = "";

    project_list.forEach(project => {
        addAvaliableProject(project);
    });
}
