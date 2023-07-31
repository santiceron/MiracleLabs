
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
tree.inOrder();
tree.preOrder();
tree.postOrder();