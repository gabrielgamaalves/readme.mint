const theme = {
    "light": ["--bg-primary: #ffffff;", "--bg-secondary: #f3f3f3;", "--color-primary: black;"],
    "dark_default": ["--bg-primary: #0d1117;", "--bg-secondary: #161b22;", "--bg-third: #1a1f25;", "--color-primary: #c9d1d9;"],
    "dark_high_contrast": ["--bg-primary: #0a0c10;", "--bg-secondary: #272b33;", "--bg-third: #1a1f25;", "--color-primary: #ffffff;"],
}

if(localStorage.getItem("theme")){
    themeInsert(theme[localStorage.getItem("theme")])
};

function themeInsert(theme){
    function ls() {
        let t = JSON.stringify(theme)
        t = t.replace(/\[/g, '').replace(/\]/g, '').replace(/"/g, '').replace(/,/g, "\n")
        return t
    }
    return document.getElementById("PageTheme").innerHTML = ":root{" + `${ls()}` + "}"
}

function themeSelect(t) {
    themeInsert(theme[t])
    localStorage.setItem("theme", t)
}
// --github-bg-color-light: #ffffff;
// --github-bg-color-dark-default: #0d1117;
// --github-bg-color-dark-high-contrast: #0a0c10;
// --github-bg-color-dark-dimmed: #22272e;