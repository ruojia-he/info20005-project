/* side bar */
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById("overlay");


function overlayOn() {
    overlay.style.display = "block";
    sidebar.classList.add('open');
}

function overlayOff() {
    overlay.style.display = "none";
    sidebar.classList.remove('open');
}

const closeButton = document.querySelector('.sidebar-close');
closeButton.addEventListener('click', () => {overlayOff()});


/* total-purchase 
const totalPurchaseBtn = document.getElementById("total-purchase-btn");

function btnActive() {
    totalPurchaseBtn.classList.add('active');
} */


/* checkout steps */
let stepOne = document.getElementById("step-one-show");
let isStepOne = stepOne.classList.contains("step-one-show");

let stepTwo = document.getElementById("step-two-show");
let isStepTwo  = stepTwo.classList.contains("step-two-show");

let stepThree = document.getElementById("step-three-show");
let isStepThree  = stepThree.classList.contains("step-three-show");

function steps() {
    if(isStepOne) {
        document.querySelectorAll(".step-one-done").forEach(a=>a.style.display = "initial");
        document.querySelectorAll(".step-one-show").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".step-two-show").forEach(a=>a.style.display = "initial");
    } else if(isStepTwo) {
        document.querySelectorAll(".step-two-done").forEach(a=>a.style.display = "initial");
        document.querySelectorAll(".step-two-show").forEach(a=>a.style.display = "none");
        document.querySelectorAll(".step-three-show").forEach(a=>a.style.display = "initial");
    } else if(isStepThree) {
        document.querySelectorAll(".step-three-done").forEach(a=>a.style.display = "initial");
        document.querySelectorAll(".step-three-show").forEach(a=>a.style.display = "none");
    }
}



let picked = document.getElementById("picked");
let isPicked = picked.classList.contains("picked");

let shipped = document.getElementById("shipped");
let isShipped = picked.classList.contains("shipped");

function deliveryMethod() {
    if(isPicked) {
        document.querySelectorAll(".shipped").forEach(a=>a.style.display = "initial");
        document.querySelectorAll(".picked").forEach(a=>a.style.display = "none");
    } else if (isShipped) {
        document.querySelectorAll(".picked").forEach(a=>a.style.display = "initial");
        document.querySelectorAll(".shipped").forEach(a=>a.style.display = "none");      
    }
}