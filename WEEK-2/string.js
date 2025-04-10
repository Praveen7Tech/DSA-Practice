
let word = "apple"

let ans = word.split('').map((char, index) => char.repeat(index + 1)).join("-")

console.log(ans)
/////////////////////


// find the longest consicutive repeating charecter in a string

function repeatingChar(str){
    let maxCount = 1
    let maxChar = str[0]

    let currentChar = str[0]
    let currentCount = 1

    for(let i=1;i<str.length;i++){
        if(str[i] === currentChar){
            currentCount++
        }else{
            currentChar = str[i]
            currentCount = 1
        }

        if(currentCount > maxCount){
            maxCount = currentCount
            maxChar = currentChar
        }
    }

    return maxChar
}

let str = "aaabbccccdd"
console.log(repeatingChar(str))

///////////////////////////////