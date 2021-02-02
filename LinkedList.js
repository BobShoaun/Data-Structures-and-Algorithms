class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }

  static insert(front, value, position) {
    if (position = 0) {
      front = new LinkedListNode(value, front);
      return true;
    }

    let curr = front;
    for (let i = 0 ; i < position - 1 && curr != null; i++)
      curr = curr.next;
    
    if (curr == null)
      return false;
    
    let newNode = new LinkedListNode(value, curr.next);
    curr.next = newNode;
    return true;
  }

  printAll() {
    let output = "";
    let curr = this;
    while (curr != null) {
      output += curr.value + " -> ";
      curr = curr.next;
    }
    console.log(output);
  }
}


let front = new LinkedListNode(3, null);
front = new LinkedListNode(2, front);
front = new LinkedListNode(1, front);

front.printAll();

LinkedListNode.insert(front, 100, 0);

front.printAll();

