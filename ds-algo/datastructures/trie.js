class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    debugger;
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      let node = current.children[ch];
      if (node == null) {
        node = new TrieNode();
        current.children[ch] = node;
      }
      current = node;
    }
    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;
    if (!current) return false;
    for (let i = 0; i < word.length; i++) {
      let ch = word.charAt(i);
      let node = current.children[ch];
      if (!node) {
        return false;
      }
      current = node;
    }
    return current.endOfWord;
  }

  print() {
    let current = this.root;
    if (!current) {
      console.log("There's nothing here!");
      return false;
    }
    while (current.endOfWord) {}
  }
}

let trie = new Trie();
trie.insert("sam");
trie.insert("sammie");
console.log(trie);
trie.search("sam");
