
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

// Vlaid Parenthesis

function validPara(str){
    let arr = []
    let map = {")":"(","}":"{","]":"["}

    for(let char of str){
        if(char === "(" || char === "{" || char === "["){
            arr.push(char)
        }else{
            if(arr.pop() !== map[char]){
                return false
            }
        }
    }

    return arr.length === 0
}

let str1 = "{[()]}"

console.log(validPara(str))

//////////////////////////////

// Valid Anagram

function anagram(s,t){
    let count = {}

    for(let char of s){
        count[char] = (count[char] || 0)+ 1
    }

    for(let char of t){
        if(!count[char]){
            return false
        }
    }
    return true
}

let  s = "anagram", t = "nagaram"

console.log(anagram(s,t))

//////////////////

// MERGE TWO SORTED LIST IN TO ONE

function sort(list1,list2){
    let sample = new ListNode(-1)

    let finalList = sample

    while(list1 && list2){
        if(list1.val < list2.val){
            finalList.next = list1
            list1 = list1.next
        }else{
            finalList.next = list2
            list2 = list2.next
        }

        finalList = finalList.next
    }

    finalList.next = list1 || list2
    return sample.next
}