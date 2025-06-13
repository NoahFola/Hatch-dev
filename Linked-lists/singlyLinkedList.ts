class SinglyNode {
  value: number;
  next: SinglyNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: SinglyNode | null = null;
  tail: SinglyNode | null = null;
  size: number = 0;

  createSinglyLinkedList(nodeValue: number): SinglyNode {
    const node = new SinglyNode(nodeValue);
    this.head = node;
    this.tail = node;
    this.size = 1;
    return this.head;
  }

  insertInLinkedList(nodeValue: number, location: number): void {
    const node = new SinglyNode(nodeValue);

    if (!this.head) {
      this.createSinglyLinkedList(nodeValue);
      return;
    }

    if (location === 0) {
      node.next = this.head;
      this.head = node;
    } else if (location >= this.size) {
      node.next = null;
      if (this.tail) {
        this.tail.next = node;
      }
      this.tail = node;
    } else {
      let tempNode = this.head;
      let index = 0;
      while (index < location - 1) {
        tempNode = tempNode.next!;
        index++;
      }
      const nextNode = tempNode.next;
      tempNode.next = node;
      node.next = nextNode;
    }

    this.size++;
  }

  traverseSinglyLinkedList(): void {
    if (!this.head) {
      console.log("Linked list does not exist");
      return;
    }

    let tempNode = this.head;
    let output = "";
    while (tempNode) {
      output += `${tempNode.value} --> `;
      tempNode = tempNode.next!;
    }
    output += "null";
    console.log(output);
  }

  searchNode(nodeValue: number): boolean {
    if (!this.head) {
      console.log("sLL does not exist");
      return false;
    }

    let tempNode = this.head;
    let index = 0;
    while (tempNode) {
      if (tempNode.value === nodeValue) {
        console.log(`Node found at index ${index}`);
        return true;
      }
      tempNode = tempNode.next!;
      index++;
    }

    console.log("Node not found");
    return false;
  }

  deleteNode(location: number): void {
    if (!this.head) {
      console.log("List does not exist");
      return;
    }

    if (location === 0) {
      this.head = this.head.next;
      this.size--;
      if (this.size === 0) {
        this.tail = null;
      }
      return;
    }

    if (location >= this.size - 1) {
      let tempNode = this.head;
      for (let i = 0; i < this.size - 2; i++) {
        tempNode = tempNode!.next!;
      }
      tempNode.next = null;
      this.tail = tempNode!;
      this.size--;
      return;
    }

    let tempNode = this.head;
    for (let i = 0; i < location - 1; i++) {
      tempNode = tempNode!.next!;
    }
    tempNode.next = tempNode.next!.next;
    this.size--;
  }
}

// Example usage
const list = new SinglyLinkedList();
list.createSinglyLinkedList(10);
list.insertInLinkedList(20, 1);
list.insertInLinkedList(30, 2);
list.insertInLinkedList(5, 0);
list.traverseSinglyLinkedList(); // 5 --> 10 --> 20 --> 30 --> null
list.searchNode(20);             // Node found at index 2
list.deleteNode(2);
list.traverseSinglyLinkedList(); // 5 --> 10 --> 30 --> null
