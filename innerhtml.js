const initapp=async ()=>
{
 const button1=document.getElementById("1");
 button1.addEventListener('click',parse1);
 const button2=document.getElementById("2");
 button2.addEventListener('click',parse2);
}

document.addEventListener('DOMContentLoaded',initapp)

const parse1=()=>
{
    const a=document.querySelector('main')
    
    const sdate=Date.now();
    let i=0;
    while (i<500)
    {
        a.innerHTML+=`<p> my value is ${i}</p>`;
        i++;
    }

    console.log(`The duration ${Date.now()-sdate}`);

}
const parse2=()=>
{

    let a=document.querySelector('main')
    let d=document.createDocumentFragment();
    const sdate=Date.now();
    let i=0;
    while (i<500)
    {
        let b=document.createElement('p');
        b.textContent=`my value is ${i}`;
        d.append(b);
        i++;
    }
    a.appendChild(d);

    console.log(`The duration ${Date.now()-sdate}`);

}