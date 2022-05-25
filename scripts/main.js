function showNav() {
    const x = document.getElementById("top_nav")
    if (x.className === "nav_menu") {
        x.className += " nav_expand";
    } else if (x.className === "nav_menu teams_expand") {
        x.className = "nav_menu nav_expand"
    } else {
        x.className = "nav_menu";
    }
}

function showTeams() {
    const x = document.getElementById("top_nav")
    console.log("main.showTeams(): Initial className: " + x.className)
    if (x.className === "nav_menu") {
        x.className += " teams_expand";
    } else if (x.className === "nav_menu nav_expand") {
        x.className = "nav_menu teams_expand"
    } else {
        x.className = "nav_menu"
    }
    console.log("main.showTeams(): Updated className: " + x.className)
}


function getContent() {
    elementId="#article";
    contentLocation= "https://www.wichitaunitedfc.com/post/wufc-and-fc-wichita-join-forces";
    console.log('Function "getContent" inputs: ' + elementId + ', ' + contentLocation)
    if (!elementId.startsWith("#")) {
        elementId = "#" + elementId;
        console.log("Updated elementId to " + elementId);
    }

    $(elementId).load(contentLocation)
}