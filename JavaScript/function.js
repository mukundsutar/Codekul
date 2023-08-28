function calc(a, b, op) {
    let result = 0;

    if (op == "+") {
        result = a + b;
    } else if (op == "-") {
        result = a - b;
    } else if (op == "*") {
        result = a * b;
    } else {
        result = a / b;
    }

    console.log(result);
}

calc(2, 3, "/");
