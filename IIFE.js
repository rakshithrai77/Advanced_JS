(()=>
{
console.log("hello");
})();

(function ()
{
console.log("hello")
})();

const x=10;
const hello=()=>console.log("hello World");

(()=>
{
    const x=9;
    const hello=()=>"hello"
    console.log(x);
    console.log(hello())
})()

console.log(x)
console.log(hello());

const inc1=(()=>{
  let count=0;
  console.log(count);
  const credits=(count)=>console.log(`credits ${count}`);
  return ()=>{count+=1;credits(count)};
}
)();
inc1()
inc1()

//Module pattern
const Score=(()=>{
let count=0;


return {
 current:()=>{ return count},
 inc:()=>count+=1,
 sub:()=>count--
}
})()
Score.inc();
console.log(Score.current());

((namespace)=>{
 namespace.count=0;
 namespace.inc=function (){this.count+=1};
 namespace.current=function () {return this.count};
}
)(window.App=window.App || {})

App.inc();
console.log(App.current())
App.inc();
console.log(App.current())


