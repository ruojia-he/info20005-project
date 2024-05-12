const cartIcon = document.querySelector('.cart-icon');
const sidebar = document.getElementById('sidevar');
const overlay = document.getElementById("overlay");


function overlayOn() {
    overlay.style.display = "block";
}

function overlayOff() {
    overlay.style.display = "none";
}


cartIcon.addEventListener('click', () => {sidebar.classList.toggle('open');});

const closeButton = document.querySelector('.sidebar-close');
closeButton.addEventListener('click', () => {sidebar.classList.remove('open');});
