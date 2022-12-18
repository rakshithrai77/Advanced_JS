const ids=[1,2,3,4,5,6,7,8,9,10]

const initapp= async()=>
{
    usemap2(ids);
}

document.addEventListener('DOMContentLoaded',initapp);

const getpost =async (id)=>
{
return await await (await fetch(`https://jsonplaceholder.typicode.
com/posts/${id}`)).json()
}


const useforeach=(ids)=>
{
    ids.forEach(async (ids) => {

        const data=await getpost(ids);
        console.log(data)
        
    });
}

const useforeach1=async (ids)=>
{
   for(let i=0;i<ids.length;i++){

        const data= await getpost(ids[i]);
        console.log(data)}
/*for(let id of ids)
    {
        const data= await getpost(id)
        console.log(data)
    }*/
        
}

const usemap2=async (ids)=>
{
   const posts=await Promise.allSettled(ids.map((id)=>getpost(id)))
   console.log(posts);
        
}


