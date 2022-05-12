function showNav() {
    const x = document.getElementById("top_nav")
    if (x.className === "nav_menu") {
        x.className += " nav_expand";
    } else if (x.className === "nav_menu set_expand") {
        x.className = "nav_menu nav_expand"
    } else {
        x.className = "nav_menu";
    }
}

function changeStyle() {
    let cur_style = (document.getElementById("page_style").href);
    let new_style;
    let new_text;
    let view_mode_html = document.getElementById("view_mode").innerHTML
    console.log(view_mode_html)
    if (cur_style.includes("default.css")) {
        new_style = "dark.css";
        new_text = view_mode_html.replace("Dark","Normal");
    } else {
        new_style = "default.css";
        new_text = view_mode_html.replace("Normal","Dark")
    }
    let style_path = "../styles/" + new_style;
    document.getElementById("page_style").setAttribute("href", style_path);
    document.getElementById("view_mode").innerHTML = new_text;
}