const bookBtn = document.getElementById("bookBtn");
const bookingSection = document.getElementById("booking");

bookBtn.addEventListener("click", () => {
    bookingSection.scrollIntoView({ behavior: "smooth" });
});

const cartContainer = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const bookNowBtn = document.getElementById("bookNow");
const message = document.getElementById("message");

const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletter-msg");
const newsletterName = document.getElementById("newsletter-name");
const newsletterEmail = document.getElementById("newsletter-email");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;
const services = [
    { name: "Dry Cleaning", price: 200 },
    { name: "Ironing", price: 50 },
    { name: "Wash & Fold", price: 150 },
    { name: "Jacket Cleaning", price: 300 }
];

const serviceList = document.getElementById("service-list");
function renderServices() {
    serviceList.innerHTML = "";
    services.forEach((service, index) => {
        const div = document.createElement("div");
        div.classList.add("service");
        div.innerHTML = `
            <div class="service-info">
                <span class="service-name">${service.name}</span>
                <span class="price">₹${service.price}</span>
            </div>
            <button class="add-btn">Add Item</button>
        `;
        serviceList.appendChild(div);

        const btn = div.querySelector(".add-btn");
        btn.addEventListener("click", () => addToCart(service));
    });
}

function renderCart() {
    cartContainer.innerHTML = "";
    total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>No items added</p>";
        totalElement.innerText = "Total Amount: ₹0";
        localStorage.setItem("cart", JSON.stringify(cart));
        return;
    }

    cart.forEach((item, index) => {
        const row = document.createElement("div");
        row.classList.add("cart-row");
        row.innerHTML = `
            <span>${index + 1}</span>
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button class="remove-btn">❌</button>
        `;

        row.querySelector(".remove-btn").addEventListener("click", () => {
            cart.splice(index, 1);
            renderCart();
        });

        cartContainer.appendChild(row);
        total += item.price;
    });

    totalElement.innerText = `Total Amount: ₹${total}`;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(service) {
    cart.push(service);
    renderCart();
}
bookNowBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!name || !email || !phone) {
        showMessage("Please fill all fields!", "red");
        return;
    }
    if (!email.includes("@")) {
        showMessage("Enter a valid email!", "red");
        return;
    }
    if (phone.length !== 10 || isNaN(phone)) {
        showMessage("Enter valid phone number!", "red");
        return;
    }
    if (cart.length === 0) {
        showMessage("Cart is empty!", "red");
        return;
    }

    emailjs.init("fzmZwECbEPXTGOoA5");
    emailjs.send("service_kazkfmt", "template_2ksrp5g", {
        name: name,
        email: email,
        phone: phone,
        services: cart.map(i => i.name).join(", "),
        total: total
    }).then(() => {
        showMessage("✅ Booking Successful! Confirmation email sent.", "green");
        clearBookingForm();
    }).catch(err => {
        console.error("EmailJS error:", err);
        showMessage("Booking successful but failed to send email.", "orange");
        clearBookingForm();
    });
});

function showMessage(msg, color) {
    message.innerText = msg;
    message.style.color = color;
}

function clearBookingForm() {
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cart = [];
    renderCart();
}

newsletterForm.addEventListener("submit", e => {
    e.preventDefault();
    const nName = newsletterName.value.trim();
    const nEmail = newsletterEmail.value.trim();

    if (!nName || !nEmail || !nEmail.includes("@")) {
        newsletterMsg.innerText = "Enter valid name and email!";
        newsletterMsg.style.color = "red";
        return;
    }

    newsletterMsg.innerText = "✅ Subscribed successfully!";
    newsletterMsg.style.color = "green";
    newsletterForm.reset();
});

renderServices();
renderCart();