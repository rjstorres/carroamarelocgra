/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
**/

function MyGraphLeaf(graph, xmlelem) {
	this.graph = graph;
	this.type = graph.reader.getString(xmlelem, 'type');
	this.type == 'patch' ? this.args = xmlelem : this.args = graph.reader.getString(xmlelem, 'args');
	this.args = graph.reader.getString(xmlelem, 'args');
	this.args = this.args.split(" ").map(Number);
	this.primitive = null;

	switch (this.type) {
		case "triangle":
			this.primitive = new Triangle(this.graph.scene, this.args);
			break;
		case 'sphere':
			this.primitive = new Sphere(this.graph.scene, this.args);
			break;
		case 'cylinder':
			this.primitive = new FullCylinder(this.graph.scene, this.args);
			break;
		case 'rectangle':
			this.primitive = new Rectangle(this.graph.scene, this.args);
			break;
		case 'patch':
			this.primitive = new NURBSPatch(this.graphs.scene, this.args, this.graph.reader);
		default:
			break;
	}

}

MyGraphLeaf.prototype.display = function(afs, aft){
	if((this.primitive instanceof Rectangle) || (this.primitive instanceof Triangle)){
		this.primitive.setTextureCoords(afs,aft);
	}
	this.primitive.display();
}
