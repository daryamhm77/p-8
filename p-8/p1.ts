type Person = {
    fullName: string,
    age: number,
    job: string,
    profile:{
        username: string,
        mobile:number
    },
    hobbies:string[]
};
const person : Person = {
    fullName:"sara ahmadi",
    age: 22,
    job: "web dev",
    profile:{
        username: "sr",
        mobile: 1232131323
    },
    hobbies:['movie','books']
};
console.log(person);