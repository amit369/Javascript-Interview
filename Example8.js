console.log(true+true);

let task = new Promise(function(resolve,reject) {
    setTimeout(() => {
         reject('done')
    })
})

task.then((data) => {
    console.warn(data);
},
(error) =>{
    console.warn("error ", error);
}
)