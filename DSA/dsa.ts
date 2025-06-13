const arr = [10, 20, 30, 40, 50];
console.log(arr[2]); // Output: 30



class ListNode {
    value: number;
    next: ListNode | null = null;
  
    constructor(value: number) {
      this.value = value;
    }
  }
  
  let head: ListNode = new ListNode(10);
  const newNode = new ListNode(5);
  newNode.next = head;
  head = newNode;

  console.log(head.value); // Output: 5


  function linearSearch(arr: number[], target: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return i;
    }
    return -1;
  }
  
  const nums = [10, 20, 30, 40, 50];
  console.log(linearSearch(nums, 30)); // Output: 2

  
  const numbers = [1, 2, 3, 4, 5];
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  console.log(total); // Output: 15
  
  function binarySearch(arr: number[], target: number): number {
    let left = 0, right = arr.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) return mid;
      else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  
    return -1;
  }
  
  const sortedArr = [10, 20, 30, 40, 50];
  console.log(binarySearch(sortedArr, 30)); // Output: 2

  
  function insertSorted(arr: number[], value: number): void {
    let left = 0, right = arr.length;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < value) left = mid + 1;
      else right = mid;
    }
  
    arr.splice(left, 0, value); // insert at position `left`
  }
  
  const sorted = [10, 20, 30, 40];
  insertSorted(sorted, 25);
  console.log(sorted); // Output: [10, 20, 25, 30, 40]
  