const initapp=()=>
{
    const button=document.getElementById("1");
    button.addEventListener('click',()=>
    {
        clicklog();
        button.disabled=true;
        setTimeout(()=>{button.disabled=false},2000)
    }
    
    );
}

document.addEventListener("DOMContentLoaded",initapp)

const clicklog=()=>console.log("clicked")
const debounce=(fn,delay)=>
{
 let id;
 console.log(`id at load ${id}`);
  return (...args)=>{
    console.log(`previous id ${id}`);
    if (id) clearTimeout(id)
    id=setTimeout(()=>{fn(...args)},delay);

  }
}