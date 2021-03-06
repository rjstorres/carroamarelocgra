/**
 * MyGraphNode class, representing an intermediate node in the scene graph.
 * @constructor
**/

function MyGraphNode(graph, nodeID) {
    this.graph = graph;

    this.nodeID = nodeID;

    // IDs of child nodes.
    this.children = [];

    // IDs of child nodes.
    this.leaves = [];

    // The material ID.
    this.materialID = null;

    // The texture ID.
    this.textureID = null;

    //Animation ID.
    this.animationID = [];

    this.currAnimation = null;

    this.counterAnimations = 0;
    //Is Selectable
    //Poderá ter 3 valores: true, false, null. Onde null herda o valor do seu ascendente
    this.selectable = null;

    this.endAnimationMatrix = mat4.create();
    mat4.identity(this.endAnimationMatrix);

    this.transformMatrix = mat4.create();
    mat4.identity(this.transformMatrix);
}

/**
 * Adds the reference (ID) of another node to this node's children array.
 */
MyGraphNode.prototype.addChild = function (nodeID) {
    this.children.push(nodeID);
}

/**
 * Adds a leaf to this node's leaves array.
 */
MyGraphNode.prototype.addLeaf = function (leaf) {
    this.leaves.push(leaf);
}
