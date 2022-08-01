class Node {
    constructor(value, next_node = null) {
        this.value = value;
        this.next_node = next_node;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add (value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next_node) {
                currentNode = currentNode.next_node
            }
            currentNode.next_node = newNode
        }
    }

    prepend(value) {
          let newNode = new Node(value)
          if (!this.head) {
              this.head = newNode;
          } else {
              let temp = this.head;
              this.head = newNode;
              this.head.next_node = temp;
          }
    }

    deletion(value) {
      let currentValue = this.head;
      if (currentValue.value === value) {
        this.head = currentValue.next_node
      } else {
        let prev = currentValue;
        while (currentValue.next_node) {
          if (currentValue.value === value) {
            prev.next_node = currentValue.next_node;
            prev = currentValue;
            currentValue = currentValue.next_node;
          }
          prev = currentValue;
          currentValue = currentValue.next_node;
        }
        if (currentValue.value === value) {
          prev.next_node = null;
        }

      }

    }
}

const list = new LinkedList()
list.add(2)
list.prepend(3)
list.prepend(4)
list.prepend(5)
list.deletion(3)
console.log(list)
