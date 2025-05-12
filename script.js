document.getElementById("searchMenu").addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let menuItems = document.querySelectorAll(".menu ul li a");

    menuItems.forEach(item => {
        let text = item.textContent.toLowerCase();
        let parentLi = item.closest("li");
        let parentUl = parentLi.closest("ul");

        if (text.includes(filter) && filter !== "") {
            item.classList.add("highlight"); // Resalta el elemento
            parentLi.classList.add("show"); // Expande el elemento padre

            // Expande todos los niveles superiores del submenú
            let currentElement = parentLi;
            while (currentElement) {
                let parentMenu = currentElement.closest("ul");
                if (parentMenu) {
                    parentMenu.classList.add("show"); // Expande el submenú
                }
                currentElement = parentMenu ? parentMenu.closest("li") : null;
            }
        } else {
            item.classList.remove("highlight"); // Quita el resaltado si no coincide
            parentLi.classList.remove("show"); // Oculta el submenú si no hay coincidencias
        }
    });
});





