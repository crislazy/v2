// Terminal Stuff
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

// Random Footer
const footer_texts = ["Best viewed while sleep deprived", "Made with hate and sleep deprivation","Works on my machine","Powered by caffeine and bad ideas"]
let random_id_footer = Math.floor(Math.random() * footer_texts.length)
document.getElementById("footer-random").innerHTML = footer_texts[random_id_footer]

// Cool Title
const titles = ["Crislzy's","Portfolio"]
let i = 1
setInterval(() => {
    document.title = titles[i % titles.length];
    i++;
}, 1500);

// Redirect thing
function redirect(id) {
    //Projects
    if (id == "p1"){
        location.href ="https://github.com/crislazy/blob"
    }
    else if (id == "p2"){
        location.href = "https://meowg.code2craft.xyz"
    }
}

// Navbar loader thing
async function loadNav() {
  const response = await fetch('/components/nav.html');
  const html = await response.text();

  document.getElementById('navbar').innerHTML = html;
}

loadNav();

// Simple visit tracker
const sourcep = new URLSearchParams(window.location.search);
let source = "none"
for (const thing of sourcep.keys()) {
    source = thing;
    break;
}

fetch("https://crisapis.vercel.app/api/trackStats", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    page: window.location.pathname,
    referrer: document.referrer,
    source: source
  })
});