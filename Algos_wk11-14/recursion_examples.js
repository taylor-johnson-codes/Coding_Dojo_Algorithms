function rec(x = 0){
    x++;
    if(x == 5){
        return `First return: closing function call number ${x}`;
    }
    console.log(x);
    console.log(rec(x));
    return `Second return: closing function call number ${x}`;
}
console.log(rec());

/* Output shows the stacking of the recursive function calls: 
1
2
3
4
First return: closing function call number 5
Second return: closing function call number 4
Second return: closing function call number 3
Second return: closing function call number 2
Second return: closing function call number 1
*/


/* ------------------------------------------------------------------------------------------------- */

/* FIBONACCI:
Depending on the chosen starting point of the sequence (0 or 1) the sequence would look like this:
1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
or this:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …
*/

// FIBONACCI RECURSION:

function recFib(num){
    // if(num == 1){
    //     return 0;
    // }

    // if(num == 2){
    //     return 1;
    // }

    if (num < 2){
        return num
    }

    return recFib(num-1) + recFib(num-2);
}
console.log(recFib(7));



// FIBONACCI NON-RECURSION:

function fib(n){
    let arr = [0, 1];
    for (let i = 2; i <= n; i++){
        arr.push(arr[i - 2] + arr[i -1])
    }
return arr[n]
}
console.log(fib(7));



// FIBONACCI NON-RECURSION:

function fib2(num){
    // if(num == 0){
    //     return 0;
    // }

    // if(num == 1){
    //     return 1;
    // }

    if (num < 2){
        return num
    }
    let nm2 = 0;  // num minus 2
    let nm1 = 1;  // num minus 1
    let n = 1;

    for(let i=2;i<=num;i++){
        n = nm2 + nm1;
        nm2 = nm1;
        nm1 = n;
    }
    return n;
}
console.log(fib2(7));


/* ------------------------------------------------------------------------------------------------- */

// FACTORIAL:

function fact(num){
    if(num<0){
        return "Rejected!"
    }

    else if(num==0){
        return 1;
    }

    else{
        return (num * fact(num - 1));
    }
}
console.log(fact(5));

/*
First Part of the recursion method:
1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)

Second part of the recursion method:
The method hits the if condition, it returns 1 which num will multiply itself with
The function will exit with the total value

5th call will return (5 * (5 - 1))     // num = 5 * 4
4th call will return (20 * (4 - 1))    // num = 20 * 3
3rd call will return (60 * (3 - 1))    // num = 60 * 2
2nd call will return (120 * (2 - 1))   // num = 120 * 1
1st call will return (120)             // num = 120

If we sum up all the calls in one line, we have
(5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
*/