//EmailJS CONFIG
const EMAIL_CONFIG = {
    publicKey: ENV.PUBLIC_KEY,
    serviceId: ENV.SERVICE_ID,
    templateId: ENV.TEMPLATE_ID
};

//  ELEMENTS 
const bookBtn = document.getElementById("bookBtn");
const bookingSection = document.getElementById("booking");

const serviceList = document.getElementById("service-list");
const cartBox = document.getElementById("cart-items");
const totalText = document.getElementById("total");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const bookNowBtn = document.getElementById("bookNow");
const message = document.getElementById("message");

//  SCROLL
bookBtn.onclick = function () {
    bookingSection.scrollIntoView({ behavior: "smooth" });
};

// SERVICES
const services = [
    { name: "Dry Cleaning", price: 200 },
    { name: "Ironing", price: 50 },
    { name: "Wash & Fold", price: 150 },
    { name: "Jacket Cleaning", price: 300 }
];

let cart = [];

// LOAD SERVICES 
function showServices() {
    serviceList.innerHTML = "";

    for (let i = 0; i < services.length; i++) {
        let item = services[i];

        let div = document.createElement("div");
        div.className = "service";

        div.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button>Add</button>
        `;

        div.querySelector("button").onclick = function () {
            cart.push(item);
            updateCart();
        };

        serviceList.appendChild(div);
    }
}

// UPDATE CART
function updateCart() {
    cartBox.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartBox.innerHTML = "<p>No items added</p>";
        totalText.innerText = "Total Amount: ₹0";
        return;
    }

    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];

        let row = document.createElement("div");
        row.className = "cart-row";

        row.innerHTML = `
            <span>${i + 1}</span>
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button>X</button>
        `;

        row.querySelector("button").onclick = function () {
            cart.splice(i, 1);
            updateCart();
        };

        cartBox.appendChild(row);
        total += item.price;
    }

    totalText.innerText = "Total Amount: ₹" + total;
}

// VALIDATION
function checkEmail(email) {
    return email.includes("@") && email.includes(".");
}

function checkPhone(phone) {
    return phone.length === 10 && !isNaN(phone);
}

// MESSAGE 
function showMessage(text, color) {
    message.innerText = text;
    message.style.color = color;
}

// CLEAR
function clearForm() {
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cart = [];
    updateCart();
}

//  BOOK 
bookNowBtn.onclick = function () {

    let name = nameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();

    if (name === "" || email === "" || phone === "") {
        showMessage("Please fill all fields", "red");
        return;
    }

    if (!checkEmail(email)) {
        showMessage("Invalid email", "red");
        return;
    }

    if (!checkPhone(phone)) {
        showMessage("Invalid phone", "red");
        return;
    }

    if (cart.length === 0) {
        showMessage("Cart is empty", "red");
        return;
    }

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
    }

    let orderId = "ORD" + Math.floor(Math.random() * 10000);

    
    emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
            name: name,
            email: email,
            phone: phone,
            services: cart.map(item => item.name).join(", "),
            total: total,
            order_id: orderId
        },
        {
            publicKey: EMAIL_CONFIG.publicKey
        }
    )
    .then(function (response) {
        console.log("SUCCESS:", response);
    
        showMessage("Booking successful! Order ID: " + orderId, "green");
        clearForm();
    })
    .catch(function (error) {
        console.log("FULL ERROR:", error);
    
        if (error && error.text) {
            console.log("TEXT:", error.text);
        }
    
        showMessage("Email failed. Check console.", "red");
    });
};

// INIT
showServices();
updateCart();