// Queue Implimentation

class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(value){
        this.queue.push(value)
    }

    dequeue(){
        return this.queue.shift()
    }

    peek(){
        return this.queue[0]
    }

    display(){
        console.log(this.queue)
    }
}

const queue = new Queue()

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.display()

console.log(queue.dequeue())
console.log(queue.peek())

queue.enqueue(4)
queue.display()


// Circular Queue

class CircularQueue{
    constructor(size){
        this.queue = new Array(size)
        this.size = size
        this.currentLength = 0
        this.rear = -1
        this.front = -1
    }

    isFull(){
        return this.currentLength === this.size
    }

    isEmpty(){
        return this.currentLength === 0
    }

    enqueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.size
            this.queue[this.rear] = value
            this.currentLength++
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }else{
            const removeValue = this.queue[this.front]
            this.queue[this.front] = null
            this.front = (this.front + 1) % this.size
            this.currentLength--
            if(this.isEmpty()){
                this.rear = -1
                this.front = -1
            }
            return removeValue
        }
    }

    peek(){
        return this.queue[this.front]
    }

    display(){
        if(this.isEmpty()){
            return null
        }else{
            let i;
            let ans = ""

            for(i = this.front; i !== this.rear ; i =(i+1) % this.size){
                ans += this.queue[i]+" "
            }
            ans +=this.queue[i]
            console.log(ans)
        }
    }
}

const circular = new CircularQueue(5)
circular.enqueue(10)
circular.enqueue(20)
circular.enqueue(30)
circular.enqueue(40)
circular.display()

console.log(circular.dequeue())
circular.display()
console.log(circular.peek())
circular.enqueue(50)
circular.enqueue(60)
circular.display()
circular.display()

///////////////////////

Impliment QUEUE Using Stack

class QueUsingStack{
    constructor(){
        this.stack1 = []
        this.stack2 = []
    }

    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){

        if(this.stack2.length === 0){
            while(this.stack1.length > 0){
                this.stack2.push(this.stack1.pop())
            }
        }

        return this.stack2.pop()
    }

    display(){
        console.log([...this.stack1,...this.stack2.reverse()])
    }

    peek(){
        return this.stack2[0]
    }
}

const que =new QueUsingStack()

que.enqueue(10)
que.enqueue(20)
que.enqueue(30)
que.enqueue(40)
que.display()

console.log(que.dequeue())
que.display()
console.log(que.peek())