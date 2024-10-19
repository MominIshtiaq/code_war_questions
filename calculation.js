/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
 */

function zero(operator = null) {
    if(!operator) return '0';
    return Math.floor(eval(`0 ${operator}`))
}

function one(operator = null) { // operator is also a function.
    if(!operator) return '1';
    return Math.floor(eval(`1 ${operator}`))
}

function two(operator = null) {
    if(!operator) return '2';
    return Math.floor(eval(`2 ${operator}`))
}

function three(operator = null) {
    if(!operator) return '3';
    return Math.floor(eval(`3 ${operator}`))
}

function four(operator = null) {
    if(!operator) return '4';
    return Math.floor(eval(`4 ${operator}`))
}

function five(operator = null) {
    if(!operator) return '5';
    return Math.floor(eval(`5 ${operator}`))
}

function six(operator = null) {
    if(!operator) return '6';
    return Math.floor(eval(`6 ${operator}`))
}

function seven(operator = null) {
    if(!operator) return '7';
    return Math.floor(eval(`7 ${operator}`))
}

function eight(operator = null) {
    if(!operator) return '8';
    return Math.floor(eval(`8 ${operator}`))
}

function nine(operator = null) {
    if(!operator) return '9';
    return Math.floor(eval(`9 ${operator}`))
}

function plus(num) { // num will be a function
    return `+ ${num}`
}

function minus(num) {
    return `- ${num}`
}

function times(num) {
    return `* ${num}`
}

function dividedBy(num) {
    return `/ ${num}`
}
