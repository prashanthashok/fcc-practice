var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // change code below this line
  this.add = function(element){
    var newNode = new Node(element, null);
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    let currentNode = this.head;
    
      while(currentNode.next){
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      newNode.prev = currentNode;
    }
  
  this.remove = function(element) {
    if(!this.head) return null;

    if(this.head.element === element){
      this.head = this.head.next;
    }
    let currentNode = this.head;
    while(currentNode.next){
      currentNode = currentNode.next;
    }
    if(currentNode.element===element){
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
    }
  }
  // change code above this line
};