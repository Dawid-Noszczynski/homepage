{
    const welcome = () => {
        console.log("Hello");
    }

    const updateButtonText = (specification) => {
        const button = document.querySelector(".js-mainSection__button");

        button.innerText = specification.classList.contains("specification__hide") ? "Pokaż specyfikację" : "Ukryj specyfikację";
    }

    const hideSpecification = () => {
        const specification = document.querySelector(".js-specification");

        specification.classList.toggle("specification__hide");

        updateButtonText(specification);
    }

    const init = () => {
        const button = document.querySelector(".js-mainSection__button");
        button.addEventListener("click", hideSpecification);

        welcome();
    };

    init();
}

