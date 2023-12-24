// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor () {
    this.base = null;
  }
  root() {
    return this.base;
  }

  add(data) {
    this.base = addNode(this.base, data);
    function addNode(node, data) {
      if(node === null) {
        return new Node(data);
      }
      if(data === node.data) {
        return node;
      }
      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasData(this.base, data);

    function hasData(node, data) {
      if(!node) {
        return false;
      }
      if(node.data === data){
        return true;
      }
      return data < node.data ? 
      hasData(node.left, data) :
      hasData(node.right, data);
    };
  }

  find(data) {
    return search(this.base, data);
    function search(node, data) {
      if(!node) {
        return null;
      }
      if(data === node.data) {
        return node;
      }
      return data < node.data ?
      search(node.left, data) :
      search(node.right, data);
    }
  }

  remove(data) {
    this.base = removeData(this.base, data);
    function removeData(node, data) {
      if(!node) {
        return null;
      } 
      if(data < node.data){
        node.left = removeData(node.left, data)
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data)
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeData(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.base){
      return null;
    }
    let node = this.base;
    while(node.left) {
      node = node.left;
    }
    return node.data
  }

  max() {
    if (!this.base){
      return null;
    }
    let node = this.base;
    while(node.right) {
      node = node.right;
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
};