console.log("Hello");

let button = document.querySelector(".js-mainSection__button");
let specification = document.querySelector(".js-specification")


button.addEventListener("click", () => {
    specification.classList.toggle("specification__hide");

    button.innerText = specification.classList.contains("specification__hide") ? "Pokaż specyfikację" : "Ukryj specyfikację";
})

