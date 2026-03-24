const services = [
    { name: "Dry Cleaning", price: 200, img: "dry.jpg" },
    { name: "Hair Cut", price: 150, img: "hair.jpg" },
    { name: "Spa", price: 500, img: "sp.jpg" },
    { name: "Home Cleaning", price: 300, img: "homeclean.jpg" }
];

let currentIndex = 0;
let cart = [];

const container = document.getElementById("services");

function showService() {
    if (currentIndex >= services.length) {
        container.innerHTML = "<h3>✅ All services viewed</h3>";
        return;
    }

    const s = services[currentIndex];

    container.innerHTML = `
        <div class="card">
            <img src="${s.img}">
            <h3>${s.name}</h3>
            <p>₹${s.price}</p>

            <button onclick="skipItem()">Skip Item</button>
            <button onclick="addItem()">Add Item</button>
        </div>
    `;
}

function addItem() {
    cart.push(services[currentIndex]);
    currentIndex++;
    showService();
    updateCart();
}

function skipItem() {
    currentIndex++;
    showService();
}

function updateCart() {
    const list = document.getElementById("cartList");
    const totalEl = document.getElementById("total");

    list.innerHTML = "";

    if (cart.length === 0) {
        list.innerHTML = `<p class="empty">No Items Added</p>`;
        totalEl.innerText = 0;
        return;
    }

    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerText = `${index+1}. ${item.name} - ₹${item.price}`;
        list.appendChild(li);
        total += item.price;
    });

    totalEl.innerText = total;
}

function bookNow() {
    const msg = document.getElementById("msg");

    if (cart.length === 0) {
        msg.innerText = "⚠️ Cart is empty!";
        msg.style.color = "red";
        return;
    }

    msg.innerText = "✅ Booking Successful!";
    msg.style.color = "green";
}

showService();