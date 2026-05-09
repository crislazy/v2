const titles = ["Crislzy's","Portfolio"]
let i = 0
setInterval(() => {
    document.title = titles[i % titles.length];
    i++;
}, 1500);

const footer_texts = ["Best viewed while sleep deprived", "Made with hate and sleep deprivation","Works on my machine","Powered by caffeine and bad ideas"]
let random_id_footer = Math.floor(Math.random() * footer_texts.length)
document.getElementById("footer-random").innerHTML = footer_texts[random_id_footer]

console.log(
    "%cHello there!",
    "padding: 10px; font-size: 25px;"
);

console.log(
    "%cDo NOT paste anything here unless you understand exactly what it does!",
    "background: red; color: white; padding: 10px; font-size: 15px;"
);

window.cat = function () {
    console.log(
        "%c=^.^= - YOU JUST FOUND THE CONSOLE CAT!!!",
        "background: yellow; color: black; padding: 10px; font-size: 15px;"
    )
}