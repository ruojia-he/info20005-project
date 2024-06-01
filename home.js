/* side bar */
const sidebar = document.getElementById('sidebar');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById("overlay");

function overlayOn() {
    sidebar.classList.add('open');
    overlay.style.display = "block";
}

function overlayMobileOn() {
    mobileMenu.classList.add('open');
    overlay.style.display = "block";
}

function overlayOff() {
    overlay.style.display = "none";
    sidebar.classList.remove('open');
    mobileMenu.classList.remove('open');
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
    let picBTN = document.getElementById("pic-btn");
    let delBTN = document.getElementById("del-btn");
    if(isPicked) {
        shipped.style.display = 'none';
        picked.style.display = 'initial';
        delBTN.classList.add("white");
        picBTN.classList.remove("white");
    }
    else {
        picked.style.display = 'none';
        shipped.style.display = 'initial';
        picBTN.classList.add("white");
        delBTN.classList.remove("white");
    }  
}

/* redirect to check out */
document.getElementById("redirectButton").addEventListener("click", redirect);
function redirect(){ window.location = "checkout.html"; }

document.getElementById("total-purchase-btn").addEventListener("click", redirectHome);
function redirectHome(){ window.location = "index.html"; }

window.str = "";

/* dropdown option */
function dropDownOn() {
    let dropDown = document.getElementById("dropdown");
    dropDown.classList.toggle("open");
}

function dropDownOption(option) {
    const ops = ["Standard", "GF", "Vegeterian", "Vegan"];
    window.str = ops[option - 1];
}

function dropDownOff(option) {
    let dropDown = document.getElementById("dropdown");
    let current = Number.parseInt(dropDown.classList[1].replace("d-", ""));

    dropDownOption(option);

    let choice = document.getElementsByClassName("choice");
    for(var i=0; i<choice.length; i++) {
        choice[i].innerHTML = window.str;
    }

    dropDown.classList.remove("open");

    dropDown.classList.remove("d-" + current);
    dropDown.classList.add("d-" + option);
}

/* menu drop down */
function dropDownOffMenu(option) {
    const ops = ["menu.html", "menuGrazing.html", "menu.html", "menu.html"];
    window.location = ops[option - 1]; 
}

/* add to cart */
function addToCart(addON){ 
    let cartIcon = document.querySelector(".cart-icon");
    let addIcon = document.getElementById("add");
    let sideIcon = document.getElementById("sidebar");

    let choice = document.getElementsByClassName("choice");

    if(!window.str) {
        window.str = "Standard";
    }

    for(var i=0; i<choice.length; i++) {
        choice[i].innerHTML = window.str;
    }

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

    document.getElementById("num").innerHTML = current;
    document.getElementById("numPrice").innerHTML = 20 * current;
    document.getElementById("NumPrice").innerHTML = 20 * current;

    cartIcon.classList.add("c-" + current);
    addIcon.classList.add("addOn-" + current);
    sideIcon.classList.add("item-" + current);
}