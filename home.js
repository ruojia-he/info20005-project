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

/* checkout steps */
function moveTo(toStep, isCard = true, event) {
    let steps = document.querySelector(".steps");
    let current = Number.parseInt(steps.classList[1].replace("step-", ""));
     let totalPurchaseBtn = document.getElementById("total-purchase-btn"); 
    if(isCard && toStep > current) {
        return;
    }
    steps.classList.remove("step-" + current);
    steps.classList.add("step-" + toStep);
     if(toStep == 4) {
        totalPurchaseBtn.classList.add('active');
        totalPurchaseBtn.disabled = false;
    } else {
        totalPurchaseBtn.classList.remove('active');
        totalPurchaseBtn.disabled = true;
    }
    if(event) {
        event.stopPropagation();
    }
}

/* */
function deliveryMethod(isPicked) {
    let picked = document.getElementById("picked");
    let shipped = document.getElementById("shipped");
    if(isPicked) {
        shipped.style.display = 'none';
        picked.style.display = 'initial';
    }
    else {
        picked.style.display = 'none';
        shipped.style.display = 'initial';
    }  
}

/* redirect to check out */
document.getElementById("redirectButton").addEventListener("click", redirect);
function redirect(){ window.location = "checkout.html"; }

document.getElementById("total-purchase-btn").addEventListener("click", redirectHome);
function redirectHome(){ window.location = "home.html"; }


/* add to cart */
function addToCart(addON){ 
    let cartIcon = document.querySelector(".cart-icon");
    let addIcon = document.getElementById("add");
    let sideIcon = document.getElementById("sidebar");
    
    let current = Number.parseInt(cartIcon.classList[1].replace("c-", ""));

    cartIcon.classList.remove("c-" + current);
    addIcon.classList.remove("addOn-" + current);
    sideIcon.classList.remove("item-" + current);

    current += addON;

    if(current >= 2) {
        current = 2;
    } else if (current <= 0) {
        current = 0;
    }

    cartIcon.classList.add("c-" + current);
    addIcon.classList.add("addOn-" + current);
    sideIcon.classList.add("item-" + current);
}
