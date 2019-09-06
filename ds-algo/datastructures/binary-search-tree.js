var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    this.queue = [];
    // change code below this line


    this.findMin = () => {
        if (!this.root) return null;
        let currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    };

    this.findMax = () => {
        if (!this.root) return null;

        let currentNode = this.root;
        while (currentNode.right) {
            currentNode = currentNode.right;
        }
        return currentNode.value;
    };

    this.add = (value) => {
        //debugger;
        if (!this.root) {
            this.root = new Node(value);
            return undefined;
        }
        let currentNode = this.root;
        return this.insertNode(currentNode, value);
    };


    this.insertNode = (node, value) => {
        if (value === node.value) return null;
        if (value < node.value) {
            if (node.left) {
                return this.insertNode(node.left, value);
            } else {
                node.left = new Node(value);
                return undefined;
            }
        } else {
            if (node.right) {
                return this.insertNode(node.right, value);
            } else {
                node.right = new Node(value);
                return undefined;
            }
        }
    };

    this.isPresent = (value) => {
        if (!this.root) { this.add(value);
            return false; }

        return this.searchTree(this.root, value)

    }

    this.searchTree = (node, value) => {
        if (value === node.value) return true;

        if (value < node.value) {
            return node.left ? this.searchTree(node.left, value) : false;
        }

        if (value > node.value) {
            return node.right ? this.searchTree(node.right, value) : false;
        }

        return false;
    };

    this.traverse = (mode) => {
        //debugger
        if (!this.root) return null;
        switch (mode) {
            case 'inorder':
                return this.inOrder(this.root);
            case 'preorder':
                return this.preOrder(this.root);
            case 'postorder':
                return this.postOrder(this.root);
            case 'levelorder': //Breadth-first-search
                return this.levelOrder(this.root);
        }
    }

    this.inOrder = (node) => {
        //debugger;
        if (node.left) this.inOrder(node.left);
        console.log(node.value);
        if (node.right) this.inOrder(node.right);
    }

    this.preOrder = (node) => {
        //debugger;
        console.log(node.value);
        if (node.left) this.preOrder(node.left);
        if (node.right) this.preOrder(node.right);
    }

    this.postOrder = (node) => {
        //debugger;
        if (node.left) this.postOrder(node.left);
        if (node.right) this.postOrder(node.right);
        console.log(node.value);
    }

    this.levelOrder = () => {
        //debugger;
        let queue = [this.root];
        let result = [];
        while (queue.length) {
            let node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            result.push(node.value);
        }
        return result;
    }

    this.reverseLevelOrder = () => {
        if(!this.root) return;
        let bfsQueue = [this.root];
        let nodesVisited = [];
        while(bfsQueue.length){
            let currentNode = bfsQueue.shift();
            if(currentNode.right) bfsQueue.push(currentNode.right);
            if(currentNode.left) bfsQueue.push(currentNode.left);
            nodesVisited.push(currentNode.value);
        }
        return nodesVisited;
    }

    this.findMinHeight = () => {
        if(!this.root) return -1;

        let heights = {};
        let height = 0;
        this.findHeight(this.root, height, heights);
        return Math.min(...Object.keys(heights));
    }

    this.findMaxHeight = () => {
        if(!this.root) return -1;

        let heights = {};
        let height = 0;
        this.findHeight(this.root, height, heights);
        return Math.max(...Object.keys(heights));
    }

    this.isBalanced = () => {
        return this.findMaxHeight() - this.findMinHeight() <=1;
    }

    this.findHeight = (node, height, heights) => {
        //debugger;
        if(node.left === null && node.right === null){
            return (heights[height]=true);
        }
        if(node.left){
            this.findHeight(node.left, height + 1, heights);
        }
        if(node.right){
            this.findHeight(node.right, height + 1, heights);
        }
    }

    /* My solution to delete a leaf node 
    this.remove = (value) => {
        if(!this.root) return null;
        if(!this.root.left && !this.root.right) {
            this.root = null;
            return;
        }
        let parentAndChild = [];
        parentAndChild = this.search(this.root, value);
        //console.log(parentAndChild[0].value, parentAndChild[1].value)
    }

    this.search = (node, value) => {
        let parent = null;

        while(node){
            if(value < node.value){
                parent = node;
                node = node.left;
            } else if (value > node.value) {
                parent = node;
                node = node.right;
            } else if(value === node.value) {
                if(value > parent.value) {
                    parent.right = null;
                } else {
                    parent.left = null;
                }
                return;
                //return [parent, node];      
                //node to be deleted
            } else {
                //node not found
                return null;
            }
            
        }
    } */

    this.remove = function(value) {
        if (this.root === null) {
          return null;
        }
        var target;
        var parent = null;
        // find the target value and its parent
        (function findValue(node = this.root) {
          if (value == node.value) {
            target = node;
          } else if (value < node.value && node.left !== null) {
            parent = node;
            return findValue(node.left);
          } else if (value < node.value && node.left === null) {
            return null;
          } else if (value > node.value && node.right !== null) {
            parent = node;
            return findValue(node.right);
          } else {
            return null;
          }
        }).bind(this)();
        if (target === null) {
          return null;
        }
        // count the children of the target to delete
        var children = (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
        // case 1: target has no children
        if (children === 0) {
          if (target == this.root) {
            this.root = null;
          }
          else {
            if (parent.left == target) {
              parent.left = null;
            } else {
              parent.right = null;
            }
          }
        }
        // case 2: target has one child, change code below this line
        if(children === 1){
            if(target == this.root){
                this.root = target.left || target.right;
            }
            else {
                if(parent.left == target) {
                    parent.left = target.left || target.right;
                } else {
                    parent.right = target.left || target.right;
                }
            }
        }
      }
    // change code above this line
}

let bst = new BinarySearchTree();

bst.add(6);
bst.add(4);
bst.add(8);
bst.add(2);
bst.add(5);
bst.add(7);
bst.add(9);
bst.add(1);
bst.add(3);
bst.add(10);
console.log(bst)
console.log(bst.traverse('levelorder'));
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.remove(10);
console.log(bst.traverse('inorder'));