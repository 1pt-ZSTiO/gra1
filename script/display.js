import * as GameLogic from "./game-logic.js";
import {Project} from "./projects.js";

export function addAvaliableProject(project){   
    const projectElement = document.createElement("div");
    projectElement.setAttribute('class','project');
    projectElement.innerHTML = `
        <h2>${project.name}</h2>
        <p>
            Reward: ${project.reward} Clicks: ${project.effort}
        </p>
    `;

    document.querySelector("#tasks-list").appendChild(projectElement);
}

addAvaliableProject(new Project(69,420,"Projekt1"));
addAvaliableProject(new Project(200,1000,"Projekt2"));