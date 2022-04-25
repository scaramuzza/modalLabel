'use strict';

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
    // console.log("clicked");
    modal.classList.remove("hidden"); //não precisa usar o dot (.) aqui
    overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener("click", openModal)
};

const closeModal = function () {
    modal.classList.add("hidden"); //não precisa usar o dot (.) aqui
    overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// using ESC keyboard key

document.addEventListener("keydown", function (e) {
    //console.log(e); // escape key (keyCode) = 27; observe que é um objeto e podemos acessar qualquer parte desse objeto, conforme abaixo
    if (e.key === "Escape") {
        if (!modal.classList.contains("hidden")) {
            closeModal()
        };
    };
});