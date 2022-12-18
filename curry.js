const sammy=ing1=>ing2=>ing3=>{
    return `${ing1},${ing2},${ing3}`;
}

const output=sammy("butter")("bread")("milk");

console.log(output);

const multiply=x=>y=>x*y;

console.log(multiply(3)(7));
console.log(multiply(3));
/*
const updateelem=id=>content=>document.getElementById(`${id}`).textContent=content;

console.log(updateelem(1)("hello"))
*/
//creating currying function
const curry=(fn)=>{ 
    let curried;
return curried = (...args) => {
    console.log(args)
    if(fn.length !==args.length){
        console.log(curried)
        return curried.bind(null,...args)
    }
    return  fn(...args);
};


}

const total=(x,y,z)=>x+y+z;
const f1=curry(total);
console.log(f1(10)(10));
