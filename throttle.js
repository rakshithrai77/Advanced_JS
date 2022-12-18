const initapp=()=>
{
    const button=document.getElementById("1");
    button.addEventListener('click',throttle(clicklog,2000));
}

document.addEventListener("DOMContentLoaded",initapp)

const clicklog=()=>console.log("clicked");

const throttle=(fn,delay)=>
{
 let lastime=0;
    let id=0;
  return (...args)=>{
    id++;
    console.log(`event id ${id}`);
    let now=new Date().getTime();
    if((now-lastime)<delay) return;
    lastime=now;
    fn(...args)

  }
}