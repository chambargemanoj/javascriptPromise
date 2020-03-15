function calculator (number) {
    const promise = new Promise(function (resolve,reject) {
        setTimeout(function(){
        if (typeof number !== 'number') {
            return reject(new Error ('Argument should be number'));
        }
        const result = number * number;
        resolve(result); 
        }, 1000);
    });
    return promise;
}

// square(2); 

module.exports = calculator;
