// Prototypes in javascript

// Prototypes are the mechanism by which javascript objects inherit features from one another.
let users = {
    getFullName()
    {
        return this.name+" "+this.lastName
    }
}

let student = {
    name : "Anil",
    lastName : "Sidhu",
   
}

let teacher = {
    name : "JaiPal",
    lastName : "Sharma",
    birth : 1980,
    getFullName()
    {
        return this.name+" "+this.lastName
    },
    getAge : function() {
        let age = new Date().getFullYear()-this.birth;
        return age;
    }
}
console.log(student.getFullName());
console.log(teacher.getAge());