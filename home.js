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
