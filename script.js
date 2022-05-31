const input = require('readline-sync');

function greet(bot_name, birth_year) {
    console.log("Hello! My name is Virus.");
    console.log("I was created in 2022.");
}

function remind_name() {
    console.log("Please, remind me your name.");
    let name = input.question('> ');
    console.log("What a great name you have, " + name + "!");
}

function guess_ago() {
    console.log("Let me guess your age.");
    console.log("Enter remainders of dividing your age by 3, 5 and 7.");

    let one = input.question('> ');
    let two = input.question('> ');
    let three = input.question('> ');

    let your_age = (one * 70 + two * 21 + three * 15) % 105;
    console.log("Your age is "+your_age+"; that's a good time to start programming!");
}

function count() {
    console.log("Now I will prove to you that I can count to any number you want.");

    let count_number = input.question('> ');
    let n = 0;

    while (n <= count_number){
        console.log(n+" !");
        n++;
    }
}


function test() {
    console.log("Let's test your programming knowledge.");

    console.log("Why do we use methods?");
    console.log("1. To repeat a statement multiple times.\n" +
        "2. To decompose a program into several small subroutines.\n" +
        "3. To determine the execution time of a program.\n" +
        "4. To interrupt the execution of a program.");

    let answer = true;
    while (answer){
        let number_answer = Number(input.question('> '));
        if (number_answer != 2)
            console.log("Please, try again.");
        else {
            end();
            console.log("Congratulations, have a nice day!");
            answer = false;
        }
    }
}

function end() {
    console.log("Completed, have a nice day!\n");
}

greet('Virus', '2022');
remind_name();
guess_ago();
count();
test();
