const number = +prompt("Please enter a number:")
let absNumber;
let numbersCount;
let finalAnswer = 1;

if (number >= 0) {
    absNumber = number
} else {
    absNumber = -number
}

if (absNumber === number) {
    let i;
    for (i = 0; i <= number; i++) {
        if (i ** 2 === number) {
            alert(i)
            break;
        }
    }
    if (i ** 2 !== number) {
        alert("This number doesn't have a perfect square root");
    }
} else if (absNumber !== number) {
    numbersCount = 0
    for (let j = number; j !== 0;) {
        j = Math.ceil(j / 10)
        numbersCount++
    }

    for (let k = 0; k < numbersCount; k++) {
        finalAnswer *= number
    }

    alert(finalAnswer)
}