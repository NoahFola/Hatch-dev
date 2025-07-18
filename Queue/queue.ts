class QueueNode {
    value: number;
    next: QueueNode | null;
  
    constructor(value: number) {
      this.value = value;
      this.next = null;
    }
  }
  
  class QueueLinkedList {
    private head: QueueNode | null;
    private tail: QueueNode | null;
  
    constructor() {
      this.head = null;
      this.tail = null;
      console.log("Linked list-based queue created successfully");
    }
  
    isEmpty(): boolean {
      return this.head === null;
    }
  
    enQueue(value: number): void {
      const newNode = new QueueNode(value);
  
      if (this.isEmpty()) {
        this.head = this.tail = newNode;
      } else {
        this.tail!.next = newNode;
        this.tail = newNode;
      }
  
      console.log("Value inserted successfully");
    }
  
    deQueue(): number | null {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
  
      const removedValue = this.head!.value;
      this.head = this.head!.next;
  
      // If queue becomes empty after removal
      if (this.head === null) {
        this.tail = null;
      }
  
      console.log(`Value ${removedValue} removed successfully`);
      return removedValue;
    }
  
    peek(): number | null {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return null;
      }
  
      return this.head!.value;
    }
  
    printQueue(): void {
      let current = this.head;
      const elements: number[] = [];
  
      while (current !== null) {
        elements.push(current.value);
        current = current.next;
      }
  
      console.log("Queue contents:", elements.join(" -> "));
    }
  }
  