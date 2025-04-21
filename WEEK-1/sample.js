
class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head;
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev =prev.next
            }
            prev.next = node
        }
        this.size++
    }

    remove(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next =removeNode.next
        }
        this.size--
        return removeNode
    }

    removeMiddle(){
        if(this.isEmpty()){
            return
        }
        if(this.head.next === null){
            this.head = null;
            this.size--;
            return
        }
        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while(fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next
        }

        prev.next = slow.next;
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty.!")
        }else{
            let curr = this.head
            let result = ""
            while(curr){
                result += `${curr.value } `
                curr = curr.next
            }
            console.log(result)
        }
    }
}

const List = new LinkedList()

List.prepend(10)
List.prepend(20)
List.prepend(30)
List.append(40)
List.append(50)
List.append(60)
List.print()

List.remove(3)
List.print()
List.removeMiddle()
List.print()
