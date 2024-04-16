function numberChecking(num) {
    switch (Math.sign(num)) {
        case 1:
            console.log("The number is Positive");
            break;
        case 2:
            console.log("The number is Negative");
            break;
        default:
            console.log("The number is Zero");
    }
}
 
numberChecking(12);
