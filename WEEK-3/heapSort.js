
// Heap Sort
function heapSort(arr){
    let n = arr.length
    
    for(let i = Math.floor(n / 2) - 1 ; i >= 0 ; i--){
        heapify(arr, n, i)
    }

    for(let i = n - 1 ; i > 0 ; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }

    return arr
}

function heapify(arr, size, i){
    let large = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if(left < size && arr[left] > arr[large]){
        large = left
    }
    if(right < size && arr[right] > arr[large]){
        large = right
    }

    if(large !== i){
        [arr[i], arr[large]] = [arr[large], arr[i]]
        heapify(arr, size, large)
    }
}


let arr = [5,2,7,10,6,1,9,3]
console.log(heapSort(arr))


///////////////////////////////////////


// Heap Sort Implementation (Using Max Heap)

// class MaxHeap {
//     constructor() {
//       this.heap = []
//     }
  
//     parentIndex(i) {
//       return Math.floor((i - 1) / 2)
//     }
  
//     leftChildIndex(i) {
//       return 2 * i + 1
//     }
  
//     rightChildIndex(i) {
//       return 2 * i + 2
//     }
  
//     swap(i, j) {
//       [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
//     }
  
//     buildHeap(arr) {
//       this.heap = arr
//       for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
//         this.heapifyDown(i)
//       }
//     }
  
//     heapifyDown(index) {
//       let largest = index
//       let left = this.leftChildIndex(index)
//       let right = this.rightChildIndex(index)
  
//       if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
//         largest = left
//       }
  
//       if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
//         largest = right
//       }
  
//       if (largest !== index) {
//         this.swap(index, largest)
//         this.heapifyDown(largest)
//       }
//     }
  
//     extractMax() {
//       if (this.heap.length === 0) return null
//       if (this.heap.length === 1) return this.heap.pop()
  
//       const max = this.heap[0]
//       this.heap[0] = this.heap.pop()
//       this.heapifyDown(0)
//       return max
//     }
  
//     display() {
//       console.log(this.heap)
//     }
//   }
  
//   function heapSort(arr) {
//     const maxHeap = new MaxHeap()
//     maxHeap.buildHeap(arr)
  
//     let sortedArray = []
//     while (maxHeap.heap.length > 0) {
//       sortedArray.push(maxHeap.extractMax())
//     }
//     return sortedArray.reverse() 
//   }
  
//   // Example Usage
//   const arr = [10, 20, 15, 30, 40, 50, 5, 2]
//   console.log("Original Array:", arr)
  
//   const sortedArray = heapSort(arr)
//   console.log("Sorted Array:", sortedArray)
  