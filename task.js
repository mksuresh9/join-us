// - Find the longest word in a string.
//   - Given `The quick brown fox jumped over the lazy dog` is the input to your function, it should return `jumped`.

const string = `The quick brown fox jumped over the lazy dog`;

const Longestword = (str) => {
    
    let longestword= str.split(' ').reduce((longword, sortword)=>{
        if(longword.length < sortword.length){
            return sortword
        }
        else{
        return longword
        }
    },'')
    return longestword;
}
console.log(Longestword(string))

// - Repeat a string `n` times.
//   - If `abc` and `3` are the arguments to your function, it shoudl return `abcabcabc`

// let word= 'abc', n=3;
const RepeatString=(word, n)=>{
  let repeatword= '';
  for(let i=0; i<n; i++){
    repeatword += word
  }
  return repeatword
}

console.log(RepeatString("abc", 3));

// - Remove duplicates in an array
//   - If `[1, 20, 3, 1, 3, 3]` is the input to your
//   function, it should return `[1, 20, 3]`
let array= [1, 20, 3, 1, 3, 3]
const Removeduplicates=(arr)=>{
  let originalarray =arr.reduce((org, item)=> {
    if(!org.includes(item)){
        org.push(item)
    }
    return org
    
  },[])
  return originalarray;
}

console.log(Removeduplicates(array))

// Remove falsy values
//   - If `[42, "everything", "", 2, false, "everything"]` is the input to your function, it should return `[42, "everything", 2, "everything"]`

let falsyarray= [42, "everything", "", 2, false, "everything"]

const Removefalsy=(falsyarr)=>{
let arr= falsyarr.filter((item)=> item !== "" && item !== false && item !== 0 && item !== undefined && item !== null)

return arr
}

console.log(Removefalsy(falsyarray))

// - Truncate a string
//   - If `'Absolute victory'` and `3` are the inputs to
//   your function, it should return `Abs...`

let truncstring= 'Absolute vitory', n=3;

const Truncatestring=(str, n)=>{
  if(str.length > n){
    return str.slice(0, n)+'...'
  }
  else{
    return str
  }
}

console.log(Truncatestring(truncstring, n))

