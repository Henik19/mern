let students = [
    { name: "Salmaan Ahmed", marks: "38%", cls: "3rd", address: "India" },
    { name: "Riya Sharma", marks: "85%", cls: "10th", address: "Delhi" },
    { name: "Rohan Patel", marks: "70%", cls: "12th", address: "Mumbai" },
    { name: "Priya Singh", marks: "95%", cls: "8th", address: "Bangalore" },
    { name: "Karan Mehta", marks: "67%", cls: "11th", address: "Vadodara" },
    { name: "Pooja Desai", marks: "91%", cls: "12th", address: "Rajkot" },
    { name: "Rahul Verma", marks: "73%", cls: "8th", address: "Delhi" },
    { name: "Anjali Nair", marks: "88%", cls: "9th", address: "Kochi" },
    { name: "Vikram Singh", marks: "65%", cls: "10th", address: "Jaipur" },
    { name: "Meera Joshi", marks: "93%", cls: "11th", address: "Pune" },
    { name: "Arjun Reddy", marks: "76%", cls: "12th", address: "Hyderabad" }
];

window.onload = function () {
    showStudents(students);
};

function showStudents(data) {
    let container = document.getElementById("cardsContainer");
    let noResult = document.getElementById("noResult");

    container.innerHTML = "";

    if (data.length === 0) {
        noResult.style.display = "block";
        return;
    }

    noResult.style.display = "none";

    let cards = data.map(function (s) {
        return `
        <div class="card">
            <p>Name: ${s.name}</p>
            <p>Marks: ${s.marks}</p>
            <p>Class: ${s.cls}</p>
            <p>Address: ${s.address}</p>
        </div>
        `;
    });

    container.innerHTML = cards.join("");
}

function searchStudents() {
    let input = document.getElementById("searchInput").value.toLowerCase().trim();

    let filtered = students.filter(function (s) {
        return s.name.toLowerCase().includes(input);
    });

    showStudents(filtered);
}