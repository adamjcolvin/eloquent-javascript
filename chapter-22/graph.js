class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vec) {
    return new Vec(this.x + vec.x, this.y + vec.y);
  }
  minus(vec) {
    return new Vec(this.x - vec.x, this.y - vec.y);
  }
  toString() {
    return `{ x: ${this.x}, y: ${this.y} }`;
  }
  get length() {
    Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

class GraphNode {
  constructor() {
    this.pos = new Vec(Math.random() * 1000, Math.random() * 1000);
    this.edges = [];
  }
  connect(other) {
    this.edges.push(other);
    other.edges.push(this);
  }
  hasEdge(other) {
    return this.edges.includes(other);
  }
}

function treeGraph(depth, branches) {
  let graph = [new GraphNode()];
  if (depth > 1) {
    for (let i = 0; i < branches; i++) {
      let subGraph = treeGraph(depth - 1, branches);
      graph[0].connect(subGraph[0]);
      graph = graph.concat(subGraph);
    }
  }
  return graph;
}

const springLength = 40;
const springStrength = 0.1;
const repulsionStrength = 1500;

function forceDirectedSimple(graph) {
  for (let node of graph) {
    for (let other of graph) {
      if (other == node) continue;
      let apart = other.pos.minus(node.pos);
      let distance = Math.max(1, apart.length);
      let forceSize = -repulsionStrength / (distance * distance);
      if (node.hasEdge(other)) {
        forceSize += (distance - springLength) * springStrength;
      }
      let normalized = apart.times(1 / distance);
      node.pos = node.pos.plus(normalized.times(forceSize));
    }
  }
}

function runLayout(implementation, graph) {
  function run(steps, time) {
    let startTime = Date.now();
    for (let i = 0; i < 100; i++) {
      implementation(graph);
    }
    time += Date.now() - startTime;
    drawGraph(graph);
    if (steps == 0) console.log(time);
    else requestAnimationFrame(() => run(steps - 100, time));
  }
  run(4000, 0);
}

runLayout(forceDirectedSimple, treeGraph(4, 4));
