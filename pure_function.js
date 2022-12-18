

//pure function should have one parameter
const add=(x,y) => x+y;

console.log(add(2,3))
//no side effects
//input state cannot be modified
const z=5;
const sum=(x,y)=>x+y+z;
console.log(sum(2,2))

let x=1;
const inc=()=>x+=1;
console.log(inc())

console.log(x);

const myarray=[1,2,3]

const add1=(array,data)=>
{
    array.push(data);
    return array;
}

console.log(add1(myarray,17));
console.log(myarray);


//Refactor 1

const add2=(array,data)=>
{
    return [...array,data];
}

console.log(add2(myarray,17));
console.log(myarray);

//refactor 2
let y=1;
const inc1=(num)=>num+=1;
console.log(inc1(y))
console.log(y)

//higher order function

const b=[1,2,3,4]

const c=b.filter((num=>num!==1))
console.log(c);

const d=b.map(elem=>elem*2)
console.log(d);

const e=b.reduce((acc,elem)=>acc+=elem)
console.log(e);


