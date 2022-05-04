function printGreeting(name) {
    console.log('Olá ' + name + ' tudo bem com você?');
}

printGreeting('Ronan');

function makeGreeting(name) {
    return 'Olá ' + name + ' tudo bem com você?';
}

console.log(makeGreeting('Ronan Salvador'));

function sum(num1, num2) {
    return num1 + num2
}

console.log(sum(10, 5));

function canDrive(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(canDrive(32));