// primitive type vs reference typy
// number is primitive type
// object is reference type
var x=10;
var y=x;
y=20;
console.log("x:"+x+" - y:"+y);  // x: 10 - y:20
// Number is immutable by default

/*
// object is reference type 
var a= {name:'sriram'};
var b=a;
b.name='murthy';
console.log(a);//{object {name:'murthy'}}
*/


var a= {name:'sriram',age:45}
console.log(a);

// create 1. empty object , 2. override a object, 3.apply changes with new object
// and return brand new object 
var b= Object.assign({},a,{name:'Murthy'})
console.log('after changing a:'+a.name+"-"+a.age);//sriram,45 (untouched)
console.log("b : "+b.name+'- '+b.age);//murthy, 45

//concat   filter   map works in same way
var f=[0,1,2]
var g=f.concat(3)
console.log("f :"+f + "- g :"+g); // f:[0,1,2]  g:[0,1,2,3]

//filter
var k=f.filter((val)=>val !==2);
console.log(k) //[0,1]

var m={name:'raj',things:[0,1,2]}
var n=Object.assign({},m,{name:'Kavitha'})
console.log(n.things); //[0,1,2]
n.things=m.things.concat(3)
console.log("m. things  "+m.things);//[0,1,2]
console.log("n.things:"+n.things);//[0,1,2,3]
