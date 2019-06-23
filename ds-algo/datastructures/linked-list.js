function LinkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) { // {1} 
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.head = function () {
        return head;
    };

    this.add = function (element) {
        var node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            var currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }

        length++;
    };

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
    };

    // Only change code below this line
    this.indexOf = function (element) {
        if (this.isEmpty()) return;

        var currentNode = this.head();

        var index = 0;
        while (currentNode) {
            if (currentNode.element === element) return index;
            index++;
            currentNode = currentNode.next;
        }
        return -1;
    }

    this.isEmpty = function () {
        if (!this.head()) return true;
    }

    this.elementAt = function (index) {
        if (index < 0 || index >= this.size) return;

        var currentNode = this.head();
        if (index === 0) return currentNode.element;
        let i = 1;
        while (i <= index && currentNode.next) {
            currentNode = currentNode.next;
            i++;
        }
        return currentNode.element;
    }
    // Only change code above this line


    this.removeAt = function (index) {
        if (index < 0 || index >= this.size()) return null;

        var currentNode = this.head();
        var prevNode = currentNode;
        if (index === 0) {
            head = head.next;
            this.length--;
            return currentNode.element;
        }
        let i = 0;
        while (i < index) {
            prevNode = currentNode;
            currentNode = currentNode.next;
            i++;
        }
        prevNode.next = currentNode.next;
        length--;
        return currentNode.element;
    }

    this.addAt = function(index, element){
        if(index < 0 || index >= this.size()) return false;
        var newNode = new Node(element);
        if(index = 0) {
          newNode.next = this.head();
          head = newNode;
          length++;
          return true;
          }
          let i = 0;
          let currentNode = this.head();
          let prevNode = currentNode;
          while(i<index){
            i++;
            prevNode = currentNode;
            currentNode = currentNode.next;
          }
          newNode.next = currentNode;
          prevNode.next = newNode;
          length++;
          return true;
      }
}