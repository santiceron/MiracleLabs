
class TreeNode<T> {
    data: T;
    left: TreeNode<T> | null;
    right: TreeNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
        this.root = null;
    }

    insert(data: T) {

        const newNode = new TreeNode(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(node: TreeNode<T>, newNode: TreeNode<T>) {

        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inOrder() {

        const result: T[] = [];

        if (!this.root) {
            console.log("Empty tree");
        } else {
            this.inOrderRecursive(this.root, result);
        }

        console.log("In-order: ", result);
    }

    private inOrderRecursive(node: TreeNode<T> | null, result: T[]) {
        if (node === null) {
            return;
        } else {
            this.inOrderRecursive(node.left, result);
            result.push(node.data);
            this.inOrderRecursive(node.right, result);
        }
    }

    preOrder() {

        const result: T[] = [];

        if (!this.root) {
            console.log("Empty tree");
        } else {
            this.preOrderRecursive(this.root, result);
        }

        console.log("Pre-order: ", result);
    }

    private preOrderRecursive(node: TreeNode<T> | null, result: T[]) {
        if (node === null) {
            return;
        } else {
            result.push(node.data);
            this.preOrderRecursive(node.left, result);
            this.preOrderRecursive(node.right, result);
        }
    }

    postOrder() {

        const result: T[] = [];

        if (!this.root) {
            console.log("Empty tree");
        } else {
            this.postOrderRecursive(this.root, result);
        }

        console.log("Post-order: ", result);
    }

    private postOrderRecursive(node: TreeNode<T> | null, result: T[]) {
        if (node === null) {
            return;
        } else {
            this.postOrderRecursive(node.left, result);
            this.postOrderRecursive(node.right, result);
            result.push(node.data);
        }
    }

    countElements(): number {
        return this.countElementsRecursive(this.root);
    }

    private countElementsRecursive(node: TreeNode<T> | null): number {
        if (node === null) {
            return 0;
        }

        const leftCount = this.countElementsRecursive(node.left);
        const rightCount = this.countElementsRecursive(node.right);

        return leftCount + rightCount + 1;
    }

    findMin(): T | null {

        if (this.root === null) {
            console.log("Empty tree");
            return null;
        } else {
            let currentNode = this.root;

            while (currentNode.left) {
                currentNode = currentNode.left;
            }

            return currentNode.data;
        }
    }

    findMax(): T | null {

        if (this.root === null) {
            console.log("Empty tree");
            return null;
        } else {
            let currentNode = this.root;

            while (currentNode.right) {
                currentNode = currentNode.right;
            }

            return currentNode.data;
        }
    }
}

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(2);
tree.insert(1);
tree.insert(4);
tree.insert(7);
tree.insert(6);
tree.insert(9);
tree.insert(8);
console.assert(tree.countElements() === 9);
console.assert(tree.findMin() === 1);
console.assert(tree.findMax() === 9);
tree.inOrder();
tree.preOrder();
tree.postOrder();

