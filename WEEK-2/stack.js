
// // // CREATE STACK USING QUEUE (2 QUEUE)

// class StackUsingQue {
//     constructor(){
//         this.queue1 = []
//         this.queue2 = []
//     }

//     push(value){
//         this.queue1.push(value)
//     }

//     pop(){
//         while(this.queue1.length > 1){
//             this.queue2.push(this.queue1.shift());
//         }

//         let popped = this.queue1.shift();
//         [this.queue1, this.queue2] = [this.queue2, this.queue1];

//         return popped;
//     }


//     display(){
//         console.log([...this.queue1])
//     }
// }

// //const stack = new StackUsingQue()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.display()

// console.log(stack.pop())
// stack.display()

// //////////////

// // STACK USING QUEUE (1 QUEUE)

// class StackUsingQueue {
//     constructor(){
//         this.que = []
//     }
    
//     push(value){
        
//         this.que.push(value)
        
//         let size = this.que.length
        
//         while(size > 1){
//             this.que.push(this.que.shift())
//             size--
//         }
//     }
    
//     pop(){
//         return this.que.shift()
//     }
    
//     peek(){
//         return this.que[0]
//     }
    
//     display(){
//         console.log(this.que)
//     }
// }

// //const stack = new StackUsingQueue()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.display()

// console.log(stack.pop())
// console.log(stack.peek())
// stack.display()


// // Stack implimentation using array

// class Stack {
//     constructor(){
//         this.stack = []
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){
//         return this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack.length-1]
//     }

//     display(){
//         console.log(this.stack)
//     }
// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.display()

// console.log(stack.pop())
// console.log(stack.peek())
// stack.display()

// stack using linkedList

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class StackUsingList {
//     constructor(){
//         this.top = null
//         this.size  = 0
//     }

//     push(value){
//         const node = new Node(value)

//         node.next = this.top
//         this.top = node
//         this.size++
//     }

//     pop(){
//         const removeNode = this.top
//         this.top = removeNode.next
//         this.size--

//         return removeNode.value
//     }

//     peek(){
//         return this.top.value
//     }

//     display(){
//         let curr = this.top
//         let result = []
//         while(curr){
//             result.push(curr.value)
//             curr =curr.next
//         }
//         console.log(result)
//     }
// }


// const stackLIst = new StackUsingList()

// stackLIst.push(10)
// stackLIst.push(20)
// stackLIst.push(30)
// stackLIst.push(40)
// stackLIst.display()

// console.log(stackLIst.pop())
// console.log(stackLIst.peek())

// ////////////////////

// // Reverse Stack using Recursion

// class Stack {
//     constructor(){
//         this.stack = []
//     }

//     push(value){
//         this.stack.push(value)
//     }

//     pop(){
//         return this.stack.pop()
//     }

//     peek(){
//         return this.stack[this.stack-1]
//     }

//     isEmpty(){
//         return this.stack.length === 0
//     }

//     display(){
//         console.log(this.stack)
//     }
// }

// function reverse(stack,reversed=[]){
//     if(stack.isEmpty()) return
    
//     reversed.push(stack.pop())

//     reverse(stack,reversed)

//     stack.push(reversed.shift())
// }

// const stack = new Stack()

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.display()

// reverse(stack)

// stack.display()


