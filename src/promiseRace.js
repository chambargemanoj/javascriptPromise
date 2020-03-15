var askJohn = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => resolve("Yes, I got extra pen."), 2000)
    });
}

var askEugene = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => reject("Sorry, I dont have extra pen."), 5000)
    });
}

var askSusy = () => {
    return new Promise((resolve, reject) => {
        setTimeout (() => resolve("Sure, I have extra pen."), 1000)
    });
}
// var asktoShop = () => {
//     return new Promise ((resolve,reject) => {
//         resolve("We have alwasy availability of pen for $1")
//     })
// }

Promise.race ([askJohn(), askEugene(), askSusy()])
    .then(value => {
        console.log (value);
    })
    
    .catch(error => {
        console.log(error);
    })
