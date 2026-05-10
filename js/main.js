// Status.cafe Status
fetch("https://status.cafe/users/code2craft/status.json")
.then( r => r.json() )
.then( r => {
    if (!r.content.length) {
    document.getElementById("statuscafe-content").innerHTML = "No status yet."
    return
    }
    document.getElementById("statuscafe-username").innerHTML =   `<p class="sc-up">My Status: ${r.face} ${r.timeAgo}</p>`
    document.getElementById("statuscafe-content").innerHTML =  `<p class="sc-content">${r.content}</p>`
})

//Discord Statys
async function discordChecker() {
    try {
    const response = await fetch('https://api.lanyard.rest/v1/users/920617892444258305');
    const splingus = await response.json();
    const status = splingus.data.discord_status.toUpperCase()
    document.getElementById("discord-status").innerHTML = `<strong>${status}</strong>`
    } catch (error) {
    
    }
};

discordChecker();
setInterval(discordChecker, 5000);

// LastFM Status
const BASE_URL = 'https://lastfm-last-played.biancarosa.com.br/crisc2c/latest-song';

const lastfmthing = async () => {
    try {
    const request = await fetch(BASE_URL);
    const json = await request.json();

    let isPlaying = json.track['@attr']?.nowplaying === "true";

    let title = json.track.name || "Mystery Title";
    let artist = json.track.artist['#text'] || "Mystery Artist";



        document.getElementById("listening").textContent =
            (isPlaying ? "Now listening: " : "Last listened: ");
        document.getElementById("mlistening").textContent =  title + " - " + artist;

    } catch (err) {
        document.getElementById("listening").textContent = "Some error happened... :(";
        document.getElementById("mlistening").textContent = "Some error happened... :(";
    }
};
lastfmthing();
setInterval(lastfmthing, 10000);

// Welcome Random
let random_id = Math.floor(Math.random() * 10);
let f = 1;

const texts = ["Hello there!", "Meow there!", "Howdy!", "Welcome :)"];
const animation_text = ["Pink Fluffy Unicorns", "Jumping on Rainbows🌈"];

if (random_id <= 8) {
    let text_id = Math.floor(Math.random() * texts.length);
    document.getElementById("welcome").innerHTML = texts[text_id];
}
else {
    document.getElementById("welcome").innerHTML = "Pink Fluffy Unicorns"
    setInterval(() => {
        document.getElementById("welcome").innerHTML = animation_text[f % animation_text.length];
        f++;
    }, 1750);
}