const Graph = require('graphology');
const jsdom = require("jsdom");
const gexf = require('graphology-gexf');
const fs = require('fs');

// Read file
var gexf_string;
try {
    gexf_string = fs.readFileSync('test.gexf', 'utf8');
    console.log('GEXF file loaded');    
} catch(e) {
    console.log('Error:', e.stack);
}

// Parse string
var g = gexf.parse(Graph, gexf_string);
console.log('GEXF parsed');

