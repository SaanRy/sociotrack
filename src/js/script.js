"use strict"

var showModal = document.querySelector(".js_modal"),
    hideModal = document.querySelector(".js_closeModal"),
    modal = document.querySelector(".js-modal"),
    show = "show"; 




showModal.addEventListener("click", function (eve) {
    eve.preventDefault();
    modal.setAttribute("z-index", "100");
    modal.classList.add(show);
    return false;
});

hideModal.addEventListener("click", function (eve) {
    eve.preventDefault();
    modal.setAttribute("z-index", "-1");
    modal.classList.remove("show");
    return false;
});