// Promise is an object that returns a value which you hope to receive in the future, but not now

let data = new Promise((resolve,reject)=> {
       setTimeout(() => {
          reject({ name : 'anil' , age : 28});
       }, 3000); 
}) 
data.then((data) => {
    console.warn("data" , data);
}).catch((err) => {
    console.warn(err);
})


console.warn(data);