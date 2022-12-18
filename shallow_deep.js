let x=1;
let y=3;
y+=1;
console.log(x,y);

x=[1,2,4]
y=x;
y.push(2)
console.log(x,y)

let myname="Rakshith"

myname[0]="h"

console.log(myname)

y[0]=0;
console.log(x,y);

//impure function{}

const ar=(a,s)=>
{
    a.push(s)
    return a
}
b=[1.2,4]
console.log(ar(b,5),b)

//Shallow copy vs deep copy

const zarry=[...y,10]
console.log(y,zarry)
y=[1,2,3,[1,2,3]]
const m=Object.assign([],y);
m[3][0]="jk";
console.log(m,y)
console.log(m===y)


Object.freeze(y);

y[3][0]="hj"

console.log(y)

//deep copy
let score=JSON.parse(JSON.stringify(y));
score[3][0]=1;

console.log(score,y)