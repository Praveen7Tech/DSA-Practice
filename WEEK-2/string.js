
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



/////////////////



// // CREATE STACK USING QUEUE (2 QUEUE)

class StackUsingQue {
    constructor(){
        this.queue1 = []
        this.queue2 = []
    }

    push(value){
        this.queue1.push(value)
    }

    pop(){
        while(this.queue1.length > 1){
            this.queue2.push(this.queue1.shift());
        }

        let popped = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return popped;
    }


    display(){
        console.log([...this.queue1])
    }
}

//const stack = new StackUsingQue()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.display()

console.log(stack.pop())
stack.display()

//////////////

// Stack implimentation using array

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack.length-1]
    }

    display(){
        console.log(this.stack)
    }
}

//const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.display()

console.log(stack.pop())
console.log(stack.peek())
stack.display()

//stack using linkedList

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class StackUsingList {
    constructor(){
        this.top = null
        this.size  = 0
    }

    push(value){
        const node = new Node(value)

        node.next = this.top
        this.top = node
        this.size++
    }

    pop(){
        const removeNode = this.top
        this.top = removeNode.next
        this.size--

        return removeNode.value
    }

    peek(){
        return this.top.value
    }

    display(){
        let curr = this.top
        let result = []
        while(curr){
            result.push(curr.value)
            curr =curr.next
        }
        console.log(result)
    }
}


const stackLIst = new StackUsingList()

stackLIst.push(10)
stackLIst.push(20)
stackLIst.push(30)
stackLIst.push(40)
stackLIst.display()

console.log(stackLIst.pop())
console.log(stackLIst.peek())

////////////////////

// Reverse Stack using Recursion

class Stack {
    constructor(){
        this.stack = []
    }

    push(value){
        this.stack.push(value)
    }

    pop(){
        return this.stack.pop()
    }

    peek(){
        return this.stack[this.stack-1]
    }

    isEmpty(){
        return this.stack.length === 0
    }

    display(){
        console.log(this.stack)
    }
}

function reverse(stack,reversed=[]){
    if(stack.isEmpty()) return
    
    reversed.push(stack.pop())

    reverse(stack,reversed)

    stack.push(reversed.shift())
}

//const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.display()

reverse(stack)

stack.display()
/////////////////

//Impliment STACK using QUEUE

class StackUsingQue {
    constructor(){
        this.queue = []
    }

    push(value){
        this.queue.push(value)

        for(let i=0;i<this.queue.length - 1;i++){
            this.queue.push(this.queue.shift())
        }
    }

    pop(){
        return this.queue.shift()
    }

    peek(){
        return this.queue[0]
    }

    display(){
        console.log(this.queue)
    }
}

const StackQueue = new StackUsingQue()

StackQueue.push(10)
StackQueue.push(20)
StackQueue.push(30)
StackQueue.push(40)
StackQueue.display()

console.log(StackQueue.pop())
console.log(StackQueue.peek())
StackQueue.display()
/////////////////////////


// Find MIN value from STACK

class Stack {
    constructor(){
        this.stack = []
        this.min = []
    }

    push(value){
        this.stack.push(value)

        if(this.min.length === 0 || value <= this.min[this.min.length - 1]){
            this.min.push(value)
        }
    }

    pop(){
        let removeValue = this.stack.pop()

        if(removeValue === this.min[this.min.length - 1]){
            this.min.pop()
        }

        return removeValue
    }

    getMin(){
        return this.min.length > 0 ? this.min[this.min.length - 1] : null
    }

    display(){
        console.log(this.stack)
    }
}
//const stack = new Stack()

stack.push(20)
stack.push(50)
stack.push(30)
stack.push(40)
stack.push(10)
stack.display()

console.log(stack.getMin())
console.log(stack.pop())
stack.display()
console.log(stack.getMin())

////////////////


// SORT stack Using another stack

class SortStack {
    constructor(){
        this.stack = []
    }
    
    push(value){
        this.stack.push(value)
    }
    
    pop(){
        return this.stack.pop()
    }
    
    peek(){
        return this.stack[this.stack.length-1]
    }
    
    isEmpty(){
        return this.stack.length === 0
    }
    
    display(){
        console.log(this.stack)
    }
}

function sort(stack){
    let tempStack = new SortStack()
    while(!stack.isEmpty()){
        let temp = stack.pop()

        while(!tempStack.isEmpty() && tempStack.peek() < temp){
            stack.push(tempStack.pop())
        }

        tempStack.push(temp)
    }
    
    while(!tempStack.isEmpty()){
        stack.push(tempStack.pop())
    }
}

const stack = new SortStack()

stack.push(20)
stack.push(50)
stack.push(40)
stack.push(10)
stack.push(30)
stack.display()

sort(stack)
stack.display()
