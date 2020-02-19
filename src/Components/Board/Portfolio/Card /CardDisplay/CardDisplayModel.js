/**
 * ALL THE CARD DISPLAY MODEL FOLLOWS THE STRUCTURE OF
 * - name
 * - description
 * - link to demo 
 * - link to source 
 */
const CardDisplayModel = {
    "GameOfApps": new Model("Game of Apps Competition",
        "Team Championsip in Game of Apps 2018-19 North Shore Cohort. As a team, we aimed at creating a maze game which people can play with each other through iMessage (they send maze to each other and try to solve the maze in 5 minutes). The project is an iOS app. It functions and is published as an open source iOS app. Our team is called \"Team Quay\"",
        "https://github.com/QintuTao/mind-the-maze",
        "https://github.com/QintuTao/mind-the-maze"),

    "Personal Website": new Model("BreadOnMars.com",
        "This is the website you are visiting right now. The website is built with React. Indeed, this is the first React Project I have ever deployed. This project will be always changing. The current code did not fully implementing good coding practice, good software structure for a typical React Project and also there is a plenty of space for UI improvements.",
        "https://breadonmars.com",
        "https://breadonmars.com"),

    "Uncertainty Calculator": new Model("Uncertainty Calculator",
        "A calculator which specifically focused on the tasks of performing primitive calculation with uncertainties in Physics labarotory. Participating in labs in Phys 101 course at UBC, I realized that a lot of uncertainty calculations in lab activities are reduntant. So I reduced repeating work by developing the wep app. It is built by javascript and bootstrap 4 ",
        "https://github.com/QintuTao/uncertainty-calculator",
        "https://qintutao.github.io/uncertainty-calculator/"),

    "Base-Convertor": new Model("Base-Convertor",
        "An app that help you do base conversions without any difficulties. This is the first iOS app I have made on my own. It is pretty simple. The UI design needs to be updated; there is a user request of base conversion after decimal points. The next version is in progress",
        "Not available",
        "https://apps.apple.com/us/app/base-converter/id1432178219")
}

// Constructor
/**
 * 
 * @param {String} title 
 * @param {String} description 
 * @param {String} source 
 * @param {String} demo 
 */
function Model(title, description, source, demo) {
    this.title = title;
    this.description = description;
    this.source = source;
    this.demo = demo;
}

export default CardDisplayModel;