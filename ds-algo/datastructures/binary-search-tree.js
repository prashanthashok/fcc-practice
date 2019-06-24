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
        if (!this.root) { return null; }

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
        debugger
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
        debugger;
        if (node.left) this.inOrder(node.left);
        console.log(node.value);
        if (node.right) this.inOrder(node.right);
    }

    this.preOrder = (node) => {
        debugger;
        console.log(node.value);
        if (node.left) this.preOrder(node.left);
        if (node.right) this.preOrder(node.right);
    }

    this.postOrder = (node) => {
        debugger;
        if (node.left) this.postOrder(node.left);
        if (node.right) this.postOrder(node.right);
        console.log(node.value);
    }

    this.levelOrder = () => {
        debugger;
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