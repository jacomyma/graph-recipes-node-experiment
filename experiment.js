const Graph = require('graphology');
const jsdom = require("jsdom");
const gexf = require('graphology-gexf/browser');
// const fs = require('fs');

// Read file
/*var data;
try {
    data = fs.readFileSync('test.gexf', 'utf8');
    console.log('GEXF file loaded');    
} catch(e) {
    console.log('Error:', e.stack);
}
*/
// Reading a string
// var graph = gexf.parse(Graph, data);