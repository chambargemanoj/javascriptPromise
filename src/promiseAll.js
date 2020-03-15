function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('The car is out of stock'), 5000);
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

Promise.all([
askFirstDealer().catch(error => { return error}), 
askSecondDealer().catch(error => { return error}), 
askThirdDealer().catch(error => { return error}) 
])
    .then(prices => {
        console.log(prices);
    })
    .catch(error => {
        console.log (error)
    })