// Scroll to booking section
const btn = document.getElementById("bookBtn");
const bookingSection = document.getElementById("booking");

btn.addEventListener("click", () => {
    bookingSection.scrollIntoView({ behavior: "smooth" });
});

// Elements
const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const bookNowBtn = document.getElementById("bookNow");
const message = document.getElementById("message");

// Data
let cart = [];
let total = 0;

// Service Array
const services = [
    { name: "Dry Cleaning", price: 200 },
    { name: "Ironing", price: 50 },
    { name: "Wash & Fold", price: 150 },
    { name: "Jacket Cleaning", price: 300 },
];

// Render services dynamically
const serviceList = document.getElementById("service-list");

services.forEach((serviceItem, index) => {
    const serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service");

    serviceDiv.innerHTML = `
        <div class="service-info">
            <span class="service-name">${serviceItem.name}</span>
            <span class="price">₹${serviceItem.price}</span>
        </div>
        <button class="add-btn">Add Item</button>
    `;

    serviceList.appendChild(serviceDiv);
});

// Add to Cart
const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const service = btn.closest(".service");
        const name = service.querySelector(".service-name").innerText;
        const priceText = service.querySelector(".price").innerText;
        const price = Number(priceText.replace("₹", ""));

        cart.push({ name, price });

        const emptyText = cartContainer.querySelector("p");
        if (emptyText) emptyText.remove();

        const row = document.createElement("div");
        row.classList.add("cart-row");

        row.innerHTML = `
            <span>${cart.length}</span>
            <span>${name}</span>
            <span>₹${price}</span>
            <button class="remove-btn">❌</button>
        `;

        const removeBtn = row.querySelector(".remove-btn");
        removeBtn.addEventListener("click", () => {
            row.remove();
            total -= price;
            totalElement.innerText = `Total Amount: ₹${total}`;
            cart = cart.filter(item => item.name !== name);

            if (cartContainer.children.length === 0) {
                cartContainer.innerHTML = "<p>No items added</p>";
            }
        });

        cartContainer.appendChild(row);
        total += price;
        totalElement.innerText = `Total Amount: ₹${total}`;
    });
});

// Booking Validation
bookNowBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (name === "" || email === "" || phone === "") {
        message.innerText = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        message.innerText = "Enter valid email!";
        message.style.color = "red";
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        message.innerText = "Enter valid phone number!";
        message.style.color = "red";
        return;
    }

    if (cart.length === 0) {
        message.innerText = "Cart is empty!";
        message.style.color = "red";
        return;
    }

    message.innerText = "✅ Booking Successful! We will contact you soon.";
    message.style.color = "green";

    // Optional: Clear form and cart
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cartContainer.innerHTML = "<p>No items added</p>";
    total = 0;
    totalElement.innerText = `Total Amount: ₹${total}`;
    cart = [];
});