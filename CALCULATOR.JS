const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(operation, num1, num2) {
    let result;
  
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Error: Invalid operation.");
            return;
    }
  
    console.log(`${num1} ${operation} ${num2} = ${result}`);
}

// Simulated input using readline

rl.question("Enter operator: ", (operation) => {
    rl.question("Enter first number: ", (num1) => {
        rl.question("Enter second number: ", (num2) => {
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);
            calculate(operation, num1, num2);
            rl.close();
        });
    });
});
