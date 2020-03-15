function sum (a,b) {
    const result = new Promise(function (resolve, reject) {
        if (typeof a !=='number' || typeof b !=='number') {
            return reject (new Error ("Both arg should be numbers"));
        }
        return resolve (a+b);
    });

    return result;
}

sum(1,2).then (function(value) { console.log ("The result is " + value);},  function (reason) { console.log ("Error :"+ reason);})

sum('Hello','Wrong').then (function(value) { console.log ("The result is " + value);},  function (reason) { console.log ("Error :"+ reason);})

function square (a) {
    const result = new Promise(function (resolve,reject) {
        if (typeof a !== 'number') {
            return reject(new Error ('Argument should be number'));
        }
        return resolve (a*a);
    });
    return result;
}
square(4).then(function(value) {console.log ("The square is : " + value)}, function (reason) {console.log ("The error :" + reason); })
