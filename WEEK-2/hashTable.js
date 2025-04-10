
// //Hash Table Implimentation

// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }

//     hash(key){
//         let result = 0
//         for(let i=0;i<key.length;i++){
//             result += key.charCodeAt(i)
//         }

//         return result % this.size
//     }

//     set(key,value){
//         const index = this.hash(key)
//         this.table[index] = value
//     }

//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }

//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined
//     }

//     display(){
        
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }

// const hash = new HashTable(10)

// hash.set("name", "Praveen")
// hash.set("age", 25)
// hash.set("stack", "mern")
// hash.display()

// hash.remove("name")
// hash.display()
// console.log(hash.get("age"))


// Hash Table with Collision handling


// class HashTable {
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//         this.count = 0
//     }

//     hash(key){
//         let ans = 0 
//         for(let i=0;i<key.length;i++){
//             ans += key.charCodeAt(i)
//         }
//         return ans % this.size
//     }

//     set(key,value){

//         if(this.count / this.size > 0.7){
//             this.reHash()
//         }

//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(!bucket){
//             this.table[index] = [[key,value]]
//             this.count++
//         }else{
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 sameKey[1] = value
//             }else{
//                 bucket.push([key,value])
//                 this.count++
//             }
//         }
//     }

//     reHash(){
//         console.log("start re hash")
//         const oldTable = this.table
//         this.size *= 2
//         this.table = new Array(this.size)
//         this.count = 0

//         for(let bucket of oldTable){
//             if(bucket){
//                 for(let [key,value] of bucket){
//                     this.set(key,value)
//                 }
//             }
//         }
//     }

//     get(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//            const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 return sameKey[1]
//             }
//         }
//         return null
//     }

//     remove(key){
//         const index = this.hash(key)
//         const bucket = this.table[index]
//         if(bucket){
//             const sameKey = bucket.find(item => item[0] === key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//                 this.count--
//                 if(bucket.length === 0){
//                     this.table[index] = undefined
//                 }
//             }
//         }
//     }

//     display(){

//         for(let i = 0; i< this.table.length ; i++){
//             if(this.table[i]){
//                 console.log(i," ",this.table[i])
//             }
//         }
//     }
// }

// const table = new HashTable(5)

// table.set("name", "praveen")
// table.set("age", 25)
// table.set("place", 'malappuram')
// table.set("designation","Developer")
// table.set("maritial status","single")
// table.set("salary", "12 LPA")
// table.display()

// console.log(table.get("designation"))
// table.remove("name")
// table.set("salary", 25)
// table.remove("salary")
// table.display()
////////////////////////////

// Remove Duplicates from a String Using HashTable

class HashTable {
    constructor(){
        this.table = {}
    }

    add(char){
        this.table[char] = char
    }

    exist(char){
        return this.table.hasOwnProperty(char)
    }
}

function removeDuplicate(str){
    const table = new HashTable()
    let ans = ""

    for(let char of str){
        if(!table.exist(char)){
            table.add(char)
            ans +=char
        }
    }

    return ans
}
let str ="hello world"
console.log(removeDuplicate(str))

// another method
function removeDup(str){
    let result ={}
    
    let ans = ""
    for(let char of str){
        if(!result[char]){
            result[char] = true
            ans += char
        }
    }
    return ans
}

console.log(removeDup("hello world"))

///////////////////