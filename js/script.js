{
    const welcome = () => {
        console.log("Hello");
    }

    const hideSpecification = () => {
        const specification = document.querySelector(".js-specification")
        const button = document.querySelector(".js-mainSection__button");

        specification.classList.toggle("specification__hide");
        button.innerText = specification.classList.contains("specification__hide") ? "Pokaż specyfikację" : "Ukryj specyfikację";
    }

    const init = () => {
        const button = document.querySelector(".js-mainSection__button");
        button.addEventListener("click", hideSpecification)

        welcome();
    };

    init();
}

