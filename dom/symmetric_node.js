{
    /**
     * Given a node1, node2 and a node in node1, return its
     * symmetric node in node2.
     * @param {object} node1 First node
     * @param {object} node2 Second node
     * @param {object} givenNode Given node from the first node
     * @return Symmetric node from the second node
     */
    let getSymmetricNode = function (node1, node2, givenNode) {

        let path = getPath(node1, givenNode);

        console.log("Path: ", path);

        return getNodeByPath(path, node2);
    };

    /**
     * Get node under a given root node using a given path
     * @param {array} path Array containing the path
     * @param {object} node Given root Node
     * @return Symmetric node under the given root Node
     */
    let getNodeByPath = function(path, node) {
        let i = 0, pathLength = path.length, children, targetChild;
        
        for (i = pathLength - 1; i >= 0; i--) {
            children = Array.from(node.children);

            targetChild = children[i];

            // Rest the node
            node = targetChild;
        }

        return targetChild;
    }

    /**
     * Return path of a node from root
     * @param {object} root Roof of a node
     * @param {object} node Node whose path from root is to be find
     * @return {array} Path of the node
     */
    let getPath = function(root, node) {
        let parent, children, path = [];

        while (parent != root) {
            parent = node.parentNode;
            children = Array.from(parent.childNodes); // returns a nodelist so convert to Array
            
            console.log(children);
            
            // Get index of target node child and push to path array
            path.push(children.indexOf(node));

            // Update the node
            node = parent;
        }

        return path;
    };

    // Test
    let node1 = document.getElementById("adam");
    let node2 = document.getElementById("bob");
    let givenNode = document.getElementById("givenNode");
    let targetNode = document.getElementById("targetNode");

    console.log(getSymmetricNode(node1, node2, givenNode) === targetNode);
}