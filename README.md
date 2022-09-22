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
node --max-old-space-size=16384 experiment.js
```
Values: 8192, 16384, 32768...

## Assembling tiles
You can assemble tiles with ImageMagick. For instance for a grid of 2x2 tiles
```
magick "tile 0,0.png" "tile 0,1.png" -append "column 0.png"
magick "tile 1,0.png" "tile 1,1.png" -append "column 1.png"
magick "column 0.png" "column 1.png" +append "assemblage 2x2.png"
```