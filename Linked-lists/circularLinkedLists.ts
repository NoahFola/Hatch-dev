class CircularNode {
    value: number;
    next: CircularNode;
  
    constructor(value: number) {
      this.value = value;
      this.next = this; // self-loop for circularity
    }
  }
  
  class CircularLinkedList {
    head: CircularNode | null = null;
    tail: CircularNode | null = null;
    size: number = 0;
  
    createCircularLinkedList(nodeValue: number): CircularNode {
      const node = new CircularNode(nodeValue);
      this.head = node;
      this.tail = node;
      this.size = 1;
      return this.head;
    }
  
    traverse(): void {
      if (!this.head) {
        console.log("Circular Linked List does not exist");
        return;
      }
  
      let currentNode: CircularNode = this.head;
      let result = '';
      do {
        result += `${currentNode.value} -> `;
        currentNode = currentNode.next;
      } while (currentNode !== this.head);
      result += "(back to head)";
      console.log(result);
    }
  }
  
  // Example usage
  const cll = new CircularLinkedList();
  cll.createCircularLinkedList(10);
  cll.traverse(); // 10 -> (back to head)
  