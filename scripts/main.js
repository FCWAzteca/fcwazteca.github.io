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