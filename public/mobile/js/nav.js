function mainNav() {
    let menu = document.querySelectorAll(".footer .item");
    let main = document.querySelector(".main");

    menu.forEach(elm => {
        elm.addEventListener("click", e => {
            let redirect = elm.getAttribute("data-redirect");

            if (redirect == "home") {
                main.id = "";
                document.querySelector(".main iframe").src = "./games.html";
            } else if (["settings", "info"].includes(redirect)) {
                main.id = "closed";
            }
        })
    })
}