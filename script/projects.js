//Projekty które gracz może wykonywać w zamian za pieniądze

export class Project{
    constructor(reward, effort, name){
        this.effort = effort;
        this.reward = reward;
        this.name   = name;
    }
}