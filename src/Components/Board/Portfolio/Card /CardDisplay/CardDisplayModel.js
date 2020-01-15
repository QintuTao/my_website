const CardDisplayModel = {
    "test": new Model("a", "test", "for", "model"),
    "placeholder": new Model("this", "is", "another", "test"),
    "GameOfApps": new Model("Game of Apps Competition", "Team Championsip in Game of Apps 2018-19 North Shore Cohort", "soon", "soon"),
    "Personal Website": new Model("BreadOnMars.com", "As you see, this is the website. The website is built with React. Indeed, this is the first React Project I have ever deployed", "https://breadonmars.com", "https://breadonmars.com"),
    "Uncertainty Calculator": new Model("Uncertainty Calculator", "A calculator which specifically focused on the tasks of performing primitive calculation with uncertainties in Physics labarotory", "soon", "soon"),
    "Base-Convertor": new Model("Base-Convertor", "An app that help you do base conversions without any difficulties", "soon", "soon")
}

function Model(title, description, source, demo) {
    this.title = title;
    this.description = description;
    this.source = source;
    this.demo = demo;
}

export default CardDisplayModel;