/**
 * Trie to store and find words
 */
let Trie = function() {
    this.tree = {};
};

Trie.prototype = {
    constructor: Trie,
    /**
     * Add a word to Trie
     * @param {string} word Word to be added
     * @return {boolean} True if word is added successfully. False, otherwise
     */
    addWord: function (word) {
        // Corner cases
        if (!word) {
            console.log("Addition of '" + word + "' to Trie is not allowed.");
            return false;
        }

        let index, wordLen = word.length, treePointer = this.tree;  
        for (index = 0; index < wordLen; index++) {
            if (!treePointer.hasOwnProperty(word[index])) {
                treePointer[word[index]] = {};
            }
            treePointer = treePointer[word[index]];
        }

        treePointer.x = "END";
        return true;
    },
    /**
     * Find if a word exists in the Trie
     * @param {string} work Word to be found
     * @return {boolean} True, if the word exists. False, otherwise.
     */
    findWord: function(word) {
        // Corner cases
        if (!word) {
            console.log("Word to be found cannot be '" + word + "'.");
            return false;
        }

        let index, wordLen = word.length, treePointer = this.tree;
        for (index = 0; index < wordLen; index++) {
            if (!treePointer.hasOwnProperty(word[index])) {
                return false;
            }
            treePointer = treePointer[word[index]];
        }
        if (treePointer.x === "END") {
            return true;
        }

        return false;
    }
};

// Create a Trie and add some words
let myTrie = new Trie();

// Test 1
console.log(myTrie.addWord(""));            // false: PASS
// Test 2
console.log(myTrie.addWord("abcd"));        //  true: PASS
// Test 3
console.log(myTrie.addWord("abcef"));       //  true: PASS
// Test 4
console.log(myTrie.findWord("abc"));        // false: PASS
// Test 5
console.log(myTrie.findWord("abcd"));       //  true: PASS
// Test 6
console.log(myTrie.findWord("abcdx"));      // false: PASS
// Test 7
console.log(myTrie.findWord("abcde"));      // false: PASS
// Test 8
console.log(myTrie.findWord("abce"));       // false: PASS
// Test 9
console.log(myTrie.findWord("abcef"));      //  true: PASS
// Test 10
console.log(myTrie.findWord("abcefx"));     // false: PASS
// Test 11
console.log(myTrie.findWord("abcefxEND"));  // false: PASS
// Test 12
console.log(myTrie.addWord(0));             // false: PASS
// Test 13
console.log(myTrie.addWord("0"));           //  true: PASS
// Test 14
console.log(myTrie.findWord("0"));          //  true: PASS


