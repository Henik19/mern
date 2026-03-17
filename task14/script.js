function checkNumber() {

    var n = document.getElementById("num").value;
    n = Number(n);

    // 1. Sum of first n numbers
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum = sum + i;
    }

    // 2. Table of number
    var table = "";

    for (var i = 1; i <= 10; i++) {
        table = table + n + " x " + i + " = " + (n * i) + "<br>";
    }

    // 3. Prime number check
    var prime = true;

    if (n <= 1) {
        prime = false;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                prime = false;
            }
        }
    }

    // 4. Factors
    var factors = "";

    for (var i = 1; i <= n; i++) {
        if (n % i == 0) {
            factors = factors + i + " ";
        }
    }

    // 5. Sum of digits
    var temp = n;
    var digitSum = 0;

    while (temp > 0) {
        var digit = temp % 10;
        digitSum = digitSum + digit;
        temp = parseInt(temp / 10);
    }

    // 6. Armstrong check
    var temp2 = n;
    var arm = 0;

    while (temp2 > 0) {
        var digit = temp2 % 10;
        arm = arm + digit * digit * digit;
        temp2 = parseInt(temp2 / 10);
    }

    var armstrong = false;

    if (arm == n) {
        armstrong = true;
    }

    // Dispaly
    var result = "";

    result = result + "<p>Sum of first " + n + " numbers = " + sum + "</p>";
    result = result + "<p>Table:<br>" + table + "</p>";

    if (prime == true) {
        result = result + "<p>Prime: Yes</p>";
    } else {
        result = result + "<p>Prime: No</p>";
    }

    result = result + "<p>Factors: " + factors + "</p>";
    result = result + "<p>Sum of digits: " + digitSum + "</p>";

    if (armstrong == true) {
        result = result + "<p>Armstrong: Yes</p>";
    } else {
        result = result + "<p>Armstrong: No</p>";
    }

    document.getElementById("output").innerHTML = result;

    // Output
    console.log("Number = " + n);
    console.log("Sum = " + sum);
    console.log("Prime = " + prime);
    console.log("Factors = " + factors);
    console.log("Digit Sum = " + digitSum);
    console.log("Armstrong = " + armstrong);
}