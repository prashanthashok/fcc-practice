var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line


    this.findMin = () => {
        if(!this.root) return null;
        let currentNode = this.root;
        
        while(currentNode.left){
          currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    this.findMax = () => {
      if(!this.root) return null;

      let currentNode = this.root;
      while(currentNode.right){
        currentNode = currentNode.right;
      }
      return currentNode.value;
    }

    // change code above this line
}