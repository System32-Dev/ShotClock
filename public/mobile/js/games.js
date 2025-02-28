let GAMECARD;

async function instantLoadGameCard() {
    let res = await fetch("/mobile/gamecard.html");
    return await res.text();
}

function mainGames() {
    let games = document.querySelectorAll(".games .gamecard");

    games.forEach(gamecard => {
        gamecard.addEventListener("click", async e => {
            window.parent.document.querySelector(".main").id = "fullscreen";

            document.documentElement.innerHTML = GAMECARD;
        })
    })
}

(async() => {
    GAMECARD = await instantLoadGameCard();
})();

document.addEventListener("DOMContentLoaded", function() {
    mainGames();
})