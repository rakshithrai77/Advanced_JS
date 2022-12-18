const initapp= async()=>
{
     const multiply1=memoA(fib);
     console.log(multiply1(40));
     console.log(multiply1(40));
     console.log(multiply1(40));

}

const multiply=(num)=>
{
    return num*10;
}

const add1=(a,b,c)=>
{
    return a+b+c;
}

const fib=(pos)=>
{
    if (pos<2) return pos;
    return fib(pos-1)+fib(pos-2);
}


document.addEventListener('DOMContentLoaded',initapp);

const memoFunction = ()=>
{
    let cache={};
    return (num)=>
    {
        if(num in cache)
        {
            console.log(cache);
            return cache[num];
        }
    const result=num*10;
    cache[num]=result;
    return result;
    }

}

const memoA=(fn)=>
{
    let cache={};
    return (...args)=>{
    if(args.toString() in cache)
    {
        console.log(cache);
        return cache[args.toString()]
    }
    const result=fn(...args)
    cache[args.toString()]=result;
    return result;
    }
}