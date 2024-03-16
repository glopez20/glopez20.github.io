class LinkedList {
  head;

  constructor(head) {
    this.head = head;
  }

  insert(instance) {
    const node = new LinkedListNode(instance);

    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
  }

  delete(id) {
    if (!this.head) {
      return;
    }

    const headId = this.head.value.get_id();

    if (headId === id) {
      this.head = this.head.next;
      return;
    }

    let prevNode = this.head;
    let currentNode = this.head.next;

    while (currentNode) {
      const valueId = currentNode.value.get_id();
      if (valueId === id) {
        prevNode.next = currentNode.next;
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  search(id) {
    let currentNode = this.head;

    while (currentNode) {
      const proccesId = currentNode.value.get_id();
      if (proccesId === id) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  count() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  get_next_by_priority() {
    if (!this.head) {
      return null;
    }

    let maxPriorityNode = this.head;
    let current = this.head.next;

    while (current) {
      const currentPriority = current.value.get_prioridad();
      const maxPriority = maxPriorityNode.value.get_prioridad();

      if (currentPriority < maxPriority) {
        maxPriorityNode = current;
      }

      current = current.next;
    }

    return maxPriorityNode;
  }
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
