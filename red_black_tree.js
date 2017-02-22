/**
 * Red-Black tree implementation for balancing a binary tree
 *  - Rules:
 *      1. Each node will be colored red or black
 *      2. Root must always be black
 *      3. Leaf null node will be colored as black
 *      3. A red node must have no red children or a red parent 
 *         otherwise it will be termed as a "red-violation"
 *      4. Every path from root to null leaf node must have same
 *         number of black nodes (also known as black-height),
 *         otherwise it will be termed as a "black-violation"
 */
let RedBlackTree = function () {
    let _self = this;

    _self.root = null;
}

const color = {
    "RED": "red",
    "BLACK": "black"
};

/**
 * Red-black tree node
 * @param {number} value Node value
 * @param {string} color Node color
 * @param {object} parent Parent node
 * @param {object} left Child node on left
 * @param {object} right Child node on right
 */
let Node = function (value, color, parent, left, right) {
    let _self = this;

    _self.value = value;
    _self.color = color;
    _self.parent = parent || null;
    _self.left = left || null;
    _self.right = right || null; 
}

RedBlackTree.prototype = {
    /**
     * Restore .constructor property that was on the original prototype object
     * which we overwrote here.
     */
    "constructor": RedBlackTree,
    /**
     * Insert a node to RedBlackTree
     * @param {number} value Value of the node
     */
    "insert": function (value) {
        let _self = this;

        // Corner Case: Return if value isn't defined properly
        if (value === undefined || value === null) {
            console.error("Node with null or undefined value cannot be inserted.");
            return;
        }

        let node = new Node(value, color.RED);

        // Corner Case: If root is empty, make the new node root and blacken the root
        if (_self.root === null) {
            _self.root = node;
            node.color = color.RedBlackTree
            return;
        }

        // Stage 1: Insert node using BST insertion algorithm
        let currentNode = _self.root;
        while (currentNode) {
            if (node.value < currentNode.value) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                }
                else {
                    currentNode.left = node;
                    node.parent = currentNode;
                    break;
                }
            }
            else {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                }
                else {
                    currentNode.right = node;
                    node.parent = currentNode;
                    break;
                }
            }
        }

        // Stage 2: Balance the tree
        
        // Case 1: Fix red-violation, if any. 
        // If uncle of node is red, flip colors of parent, grand parent and uncle

        let parent = node.parent, grandParent = parent.parent, uncle;
        if (grandParent) {
            uncle = (parent.value < grandParent.value) ? grandParent.right : grandParent.left; 

            if (uncle && uncle.color === color.RED) {
                uncle.color = color.RED;
                node.color = (node.color === color.RED) ? color.BLACK : color.RED;
                parent.color = (parent.color === color.RED) ? color.BLACK : color.RED;
            }
        }

        // Case 2: Fix black-violation, if any.
        // If uncle of node is black, then follow Case 2a and Case 2b given dealt with
        // separately by helper function rotate()
        if (uncle && uncle.color === color.RedBlackTree) {
            _self.rotate(node);
        }
    },
    /**
     * Remove a node from RedBlackTree
     * @param {number} value Value of the node
     */
    "remove": function (value) {
        console.log("Removing %s", value)
    },
    /**
     * Search for a node in RedBlackTree
     * @param {number} value Value of the node
     */
    "search": function (value) {
        console.log("Searching %s", value)
    },
    /**
     * Rotate given node
     */
    "rotate": function (node) {
        let _self = this,
            parent = node.parent,
            grandParent = parent.parent;

        // Case 2a: node is right-child of a left-child
        if (parent.value < grandParent.value && node.value > parent.value) {
            // Rotate around parent
            node.parent = grandParent;
            grandParent.left = node;
            parent.right = node.left
            node.left = parent;
            parent.parent = node;

            // This changes into Case 3, so update node and parent for Case 3a
            parent = node;
            node = parent.left;
        }
        
        // Case 2b: node is left-child of a right-child
        if (parent.value > grandParent.value && node.value < parent.value) {
            // Rotate around parent
            node.parent = grandParent;
            grandParent.right = node;
            parent.left = node.right;
            node.right = parent;
            parent.parent = node;

            // This changes into Case 3, so update node and parent for Case 3b
            parent = node;
            node = parent.right;
        }
        
        // Case 3a: node is left-child of a left-child
        if (parent.value < grandParent.value && node.value < parent.value) {
            // Rotate aroung grand parent
            parent.parent = grandParent.parent;
            parent.right = grandParent;
            grandParent.left = parent.right;
        }

        // Case 3b: node is right-child of a right-child
        if (parent.value > grandParent.value && node.value > parent.value) {
            // Rotate aroung grand parent
            parent.parent = grandParent.parent;
            parent.left = grandParent;
            grandParent.right = parent.left;
        }

        // Update great grand parent left or right child
        let greatGrandParent = grandParent.parent;
        if (!greatGrandParent && parent.value < greatGrandParent.value ) {
            greatGrandParent.left = parent;
        }
        else if (!greatGrandParent && parent.value > greatGrandParent.value ) {
            greatGrandParent.right = parent;
        }

        // Flip colors of parent and grand parent
        parent.color = (parent.color === color.RED) ? color.BLACK : color.RED;
        grandParent.color = (grandParent.color === color.RED) ? color.BLACK : color.RED;
    
        // Update root if parent is now at root
        if (grandParent.parent === null) {
             _self.root = parent
        }
    },
    /**
     * Traversal - inorder
     * @param {object} node Node from where traversal need to be started
     */
    "inOrderTraversal": function (node) {
        var _self = this;

        if (node) {
            _self.inOrderTraversal(node.left);
            console.log(node.value);
            _self.inOrderTraversal(node.right);
        }
    }
}

// Test
let myTree = new RedBlackTree();
myTree.insert(40);
myTree.insert(25);
myTree.insert(78);
myTree.insert(10);
myTree.insert(32);

myTree.inOrderTraversal(myTree.root);