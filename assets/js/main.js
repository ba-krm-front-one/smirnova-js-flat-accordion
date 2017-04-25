;(() => {
    function showTab(event) {

        if(!this.classList.contains("active")){
            document.querySelectorAll(".active").forEach(elem => {
                elem.classList.toggle("active");
                elem.parentNode.classList.toggle("ba-accordion-item--active")
            });
        }

        this.classList.toggle("active");
        this.parentNode.classList.toggle("ba-accordion-item--active");


        console.log('sdfasdfdsaf');
     /*   document.querySelectorAll(".ba-menu-item").forEach(elem => {
            elem.classList.remove("ba-menu-item--active");
        });

        event.target.closest('.ba-menu-item').classList.add("ba-menu-item--active");
        let link = this.querySelector('.ba-item-link');
        let id = link.getAttribute("href");
        let tab = document.querySelector(id);
        tab.classList.add("ba-tab--active");*/
    }

    document.addEventListener('DOMContentLoaded',() => {
        document.querySelectorAll('.ba-container-item').forEach(tabLink => {
            tabLink.addEventListener('click', showTab)
        });
    });
})();





/*
(() => {
    let accordionButtons = document.querySelectorAll(".ba-container-item");


    function toggleAccordionItem(accordionItem) {
        /!* Toggle between adding and removing the "active" class,
         to highlight the button that controls the panel *!/
        accordionItem.parentNode.classList.toggle("ba-accordion-item--active");

        /!* Toggle between hiding and showing the active panel *!/
       /!* let panel = accordionItem.nextElementSibling.querySelector('.panel');
        panel.classList.toggle("show");*!/
    }

    function hideActiveAccordions() {
        let activeAccordion = document.querySelector('.ba-accordion-item--active');
        if (activeAccordion) {
            // скрываем ранее открытый аккордион
            toggleAccordionItem(activeAccordion);
        }
    }

    accordionButtons.forEach(accordionButton => {
        accordionButton.onclick = function (event) {
            // проверяем, активный ли сейчас элемент
            // если нет, тогда нам нужно скрыть другие активные
            if (!this.parentNode.classList.contains("ba-accordion-item--active")) {
                hideActiveAccordions();
            }

            // меняем состояние выбранного аккордиона
            toggleAccordionItem(this);
        }
    });
})();
*/
