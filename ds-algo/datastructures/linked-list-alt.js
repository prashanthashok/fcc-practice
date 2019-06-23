function LinkedList() { 
    var length = 0; 
    var head = null; 
  
    var Node = function(element){ 
      this.element = element; 
      this.next = null; 
    }; 
  
    this.size = function(){
      return length;
    };
  
    this.head = function(){
      return head;
    };
  
    this.add = function(element){
      var node = new Node(element);
      if(head === null){
          head = node;
      } else {
          var currentNode = this.head();
  
          while(currentNode.next){
              currentNode  = currentNode.next;
          }
  
          currentNode.next = node;
      }
  
      length++;
    }; 
  
    this.remove = function(element){
      // Only change code below this line
      if(head === null) return;
      if(head.element === element){
        head = head.next;
      } 
      else{
        var current = this.head();
        while(current.next){
          if(current.next.element === element) {
            current.next = current.next.next;
          }
        }
      }
      length--;
      // Only change code above this line
    };
  }