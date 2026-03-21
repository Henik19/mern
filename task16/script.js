// student data (array of objects)
let students = [
    { name: "Salmaan Ahmed", marks: "38%", cls: "3rd", address: "India" },
    { name: "Riya Sharma", marks: "85%", cls: "10th", address: "Delhi" },
    { name: "Rohan Patel", marks: "70%", cls: "12th", address: "Mumbai" },
    { name: "Priya Singh", marks: "95%", cls: "8th", address: "Bangalore" },
    { name: "Karan Mehta", marks: "67%", cls: "11th", address: "Vadodara" },
    { name: "Pooja Desai", marks: "91%", cls: "12th", address: "Rajkot" }
];

// run when page loads
window.onload = function () {
    showStudents(students);

    // real-time search (mentor requirement)
    let inputBox = document.getElementById("searchInput");

    // when user types, this runs automatically
    inputBox.addEventListener("input", function () {
        searchStudents();
    });
};


// function to display students
function showStudents(data) {

    let container = document.getElementById("cardsContainer");
    let noResult = document.getElementById("noResult");

    // first clear old data
    container.innerHTML = "";

    // if no students found
    if (data.length === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }

    // loop through students (using map)
    let cards = data.map(function (s) {

        // creating html for each student
        return `
        <div class="card">
            <p>Name: ${s.name}</p>
            <p>Marks: ${s.marks}</p>
            <p>Class: ${s.cls}</p>
            <p>Address: ${s.address}</p>
        </div>
        `;

    });

    // add all cards to page
    container.innerHTML = cards.join("");
}


// function for searching students
function searchStudents() {

    // get input value
    let text = document.getElementById("searchInput").value;

    // convert to lowercase for matching
    text = text.toLowerCase();

    // filter students based on name
    let result = students.filter(function (s) {

        // check if name includes typed text
        return s.name.toLowerCase().includes(text);

    });

    // show filtered result
    showStudents(result);
}