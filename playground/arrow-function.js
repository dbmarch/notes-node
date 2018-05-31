var square = (x) => {
    var result = x * x;
    return (result);
}
console.log (square(3));

var square2 = (x) => (x * x );

console.log (square2(9));

var user = {
    name: 'Andrew', 
    sayHi: ()=>{
        console.log (`Hi I'm ${this.name}`);
    }, 
    SayHiAlt (){
        console.log (arguments);

        console.log(`Hi. I'm ${this.name}`);
    }
};

user.sayHi();
user.SayHiAlt();
user.SayHiAlt(1,2,3)
