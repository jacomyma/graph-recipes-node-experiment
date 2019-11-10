# graph-recipes-node-experiment
An experiment to execute recipes from Graph Recipes on a NodeJS infrastructure

## How to
```
npm install
node experiment.js
```

## Out of memory
In case the defatul 1 Gb RAM is not enough, specify a higher limit. For instance:
```
node --max-old-space-size=8192 experiment.js
```