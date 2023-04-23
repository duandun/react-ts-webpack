
import React from 'react';

interface TreeNodeType {
    val: number|null,
    left: number|undefined,
    right: number|undefined,
    depth?: number,
}

const ReplaceValueInTree: React.FC = () => {
    const result = replaceValueInTree([5, 4, 9, 1, 10, null, 7]);
    console.log(result);
    return (
        <div>
            {JSON.stringify(result)}
        </div>
    );
};

function replaceValueInTree(root: Array<number|null>): Array<number|null> {
    let binaryTree = [];
    for (let i = 0, p = i + 1; i < root.length; i++) {
        const node = createTreeNode(root, root[i], p, p + 1);
        binaryTree.push(node);
        p = p + 2;
    }
    console.log(binaryTree);
    depthTree(binaryTree, binaryTree[0], 0);
    const resultTree = [];
    for (let i = 0; i < binaryTree.length; i++) {
        if (binaryTree[i].depth === 0 || binaryTree[i].depth === 1) {
            resultTree.push(0);
        } else {
            const dep = binaryTree[i].depth;
            const parentNodeIndex = getParentNode(binaryTree, i);
            if (parentNodeIndex === -1) {
                resultTree.push(null);
                continue;
            }
            let rs: any = 0;
            for (let p = 0; p < binaryTree.length; p++) {
                if (binaryTree[p].depth === dep) {
                    const pIndex = getParentNode(binaryTree, p);
                    if (parentNodeIndex !== pIndex) {
                        rs += binaryTree[p].val;
                    }
                }
            }
            resultTree.push(rs);
        }
    }
    return resultTree;
}

function getParentNode(binaryTree: Array<TreeNodeType>, index: number): number {
    if (binaryTree[index].val === null) {
        return -1;
    }
    for (let i = 0; i < index; i++) {
        if (binaryTree[i].left === index || binaryTree[i].right === index) {
            return i;
        }
    }
    return 0;
}

function depthTree(binaryTree: Array<TreeNodeType>, node: TreeNodeType, depth: number): any {
    if (!node) {
        return null;
    }
    node.depth = depth;
    if (node && node.left) {
        depthTree(binaryTree, binaryTree[node.left], depth + 1);
    }
    if (node && node.right) {
        depthTree(binaryTree, binaryTree[node.right], depth + 1);
    }
}

function createTreeNode(root: Array<number|null>, val: number|null, left: number, right: number, depth?: number): TreeNodeType {
    return {
        val: (val === null ? null : val),
        left: root[left] === undefined ? undefined : left,
        right: root[right] === undefined ? undefined : right,
        depth,
    };
}

export default ReplaceValueInTree;