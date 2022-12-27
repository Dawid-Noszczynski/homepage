{
    const welcome = () => {
        console.log("Hello");
    }

    const updateButtonText = (specification, button) => {
        button.innerText = specification.classList.contains("specification__hide") ? "Pokaż specyfikację" : "Ukryj specyfikację";
    }

    const toggleSpecificationVisibility = (button) => {
        const specification = document.querySelector(".js-specification");

        specification.classList.toggle("specification__hide");

        updateButtonText(specification, button);
    }

    const init = () => {
        const button = document.querySelector(".js-mainSection__button");
        button.addEventListener("click", () => {
            toggleSpecificationVisibility(button);
        });

        welcome();
    };

    init();
}