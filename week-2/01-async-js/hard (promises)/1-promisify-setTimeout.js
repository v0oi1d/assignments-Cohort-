/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p = new Promise((resolve)=>{
        setTimeout(()=>{
            // const en = Date.now()
            // let diff = end - st
            
            resolve()
        },n*1000)
    })
    return p;
}

module.exports = wait;