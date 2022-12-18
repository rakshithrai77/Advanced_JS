
//Closure
let x=1;

const PF=()=>
{
    let myvalue=2;
    console.log(x);
    console.log(myvalue);
    const cF=()=>{
        console.log(x+=5);
        console.log(myvalue+=1);
    }
 return cF;
}

const result=PF();

console.log(result)

result();

//IIFE

const privatecounter= (()=>{
    let counter=0;
    console.log(`counter value is ${counter}`)
    return ()=>{
        console.log(counter+=1);
    };
})();

privatecounter();
privatecounter();

//IIFE with parameter
const privatecounter1= ((num)=>{
    let counter=num;
    console.log(`counter value is ${counter}`)
    return ()=>{
        console.log(counter+=num);
    };
})(3);

privatecounter1();
privatecounter1();
