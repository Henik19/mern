const dividenumber = (a, b) =>{
    return new Promise((resolve, reject) => {
        if(b === 0){
            reject("Error: Division by zero is not allowed.");
        }
        else{
            resolve(a/b);
        }
    });
};

function handleDivision(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let output = document.getElementById("output");

    dividenumber(num1,num2)
    .then(result => {
        output.innerText = "Result : " + result;
    })
    .catch(error => {
        output.innerText = error;
    });
}
const testCases = [
    [10, 2],
    [20, 4],
    [15, 3],
    [10, 0],
    [50, 5]
];
const testDiv = document.getElementById("testCases");
testCases.forEach(([a, b]) => {
    dividenumber(a, b)
        .then(res => {
            testDiv.innerHTML += `<p>Dividing ${a} by ${b} → Result: ${res}</p>`;
        })
        .catch(err => {
            testDiv.innerHTML += `<p>Dividing ${a} by ${b} → ${err}</p>`;
        });
});