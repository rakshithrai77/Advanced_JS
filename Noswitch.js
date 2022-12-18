let contenttype='/';

const extension=
{
    './css':"text/css",
    './js':"text/javascript",
    './text':"text/plain"
}

console.log(extension[contenttype] || "text/html")

const a=new Map()

a.set('./css',"text/css");
a.set('./text',"text/plain");
a.set('./js',"text/javascript")

console.log(a.get('./css') || 'text/html');