let promise = new Promise ( (resolve,reject) => {
    console.log("I am promise");
})



let promise2 = new Promise( (resolve,reject) => {
    console.log("I am Promise 2");
    resolve()
    
})



let promise3 = new Promise ( (resolve,reject) => {
    console.log("I am promise 3");
    return reject( "Erro 404")
})
promise3.then( (value) => {
    console.log(value);
    
}).catch( (error) => {
    console.log(error);
    
})

