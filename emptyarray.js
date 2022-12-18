myArray=[{id:90}];

console.log(myArray.length?true:false);

//optional chaining

console.log(myArray?.length ? true: false);

// check if the decalred variable is array if string returns false;

console.log(Array.isArray(myArray) && myArray?.[0]?.name? true:false)

console.log(Array.isArray(myArray) && myArray.length? true:false)

//null coslecating property.

console.log((Array.isArray(myArray) && myArray?.[0]?.id)  ?? "No an name property")
console.log()
