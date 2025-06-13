class DoublyNode {
  value: number;
  next: DoublyNode | null;
  prev: DoublyNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DoublyNode | null = null;
  tail: DoublyNode | null = null;
  size: number = 0;

  createDLL(nodeValue: number): DoublyNode {
    const newNode = new DoublyNode(nodeValue);
    this.head = newNode;
    this.tail = newNode;
    this.size = 1;
    return this.head;
  }

  insertDLL(nodeValue: number, location: number): void {
    const newNode = new DoublyNode(nodeValue);

    if (!this.head) {
      this.createDLL(nodeValue);
      return;
    }

    if (location === 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else if (location >= this.size) {
      newNode.prev = this.tail;
      if (this.tail) this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let tempNode = this.head;
      let index = 0;
      while (index < location - 1 && tempNode.next !== null) {
        tempNode = tempNode.next;
        index++;
      }

      newNode.next = tempNode.next;
      newNode.prev = tempNode;
      if (tempNode.next) {
        tempNode.next.prev = newNode;
      }
      tempNode.next = newNode;
    }

    this.size++;
  }

  traverseDLL(): void {
    if (!this.head) {
      console.log("DLL does not exist");
      return;
    }

    let tempNode: DoublyNode | null = this.head;
    let result = "";
    while (tempNode) {
      result += `${tempNode.value} <-> `;
      tempNode = tempNode.next;
    }
    console.log(result + "null\n");
  }

  reverseTraverseDLL(): void {
    if (!this.tail) {
      console.log("DLL does not exist");
      return;
    }

    let tempNode: DoublyNode | null = this.tail;
    let result = "";
    while (tempNode) {
      result += `${tempNode.value} <-> `;
      tempNode = tempNode.prev;
    }
    console.log(result + "null\n");
  }

  searchDLL(value: number): boolean {
    if (!this.head) {
      console.log("DLL does not exist");
      return false;
    }

    let tempNode = this.head;
    let index = 0;

    while (tempNode) {
      if (tempNode.value === value) {
        console.log(`The value was located at index ${index}`);
        return true;
      }
      tempNode = tempNode.next!;
      index++;
    }

    console.log("Value not found\n");
    return false;
  }

  deleteNode(location: number): void {
    if (!this.head) {
      console.log("DLL does not exist");
      return;
    }

    if (location === 0) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
      }
    } else if (location >= this.size - 1) {
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail!.prev;
        if (this.tail) this.tail.next = null;
      }
    } else {
      let tempNode = this.head;
      let index = 0;
      while (index < location && tempNode?.next !== null) {
        tempNode = tempNode.next;
        index++;
      }

      if (tempNode && tempNode.prev && tempNode.next) {
        tempNode.prev.next = tempNode.next;
        tempNode.next.prev = tempNode.prev;
      }
    }

    this.size--;
  }

  deleteDLL(): void {
    let tempNode = this.head;
    while (tempNode) {
      const next = tempNode.next;
      tempNode.prev = null;
      tempNode.next = null;
      tempNode = next;
    }

    this.head = null;
    this.tail = null;
    this.size = 0;
    console.log("DLL deleted successfully");
  }
}

// Example usage
const dll = new DoublyLinkedList();
dll.createDLL(10);
dll.insertDLL(5, 0);  // insert at beginning
dll.insertDLL(15, 2); // insert at end
dll.insertDLL(8, 1);  // insert in the middle
dll.traverseDLL();    // 5 <-> 8 <-> 10 <-> 15 <-> null
dll.reverseTraverseDLL(); // 15 <-> 10 <-> 8 <-> 5 <-> null
dll.searchDLL(8);     // index 1
dll.deleteNode(1);    // delete 8
dll.traverseDLL();    // 5 <-> 10 <-> 15 <-> null
dll.deleteDLL();      // clear list
