function greetUser(){
    let name = document.getElementById("nameInput").value;

    if (name === "") {
        alert("Please enter your name !!");
    }else{
        document.getElementById("greeting").innerText = "Hello, " + name;
    }
}

function changeColor(element){
    let color = element.innerText;
    element.style.backgroundColor = color;
}