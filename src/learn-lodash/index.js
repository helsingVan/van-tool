var arrayPath = './src/learn-lodash/array/';

function addScript (src) {
    var script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

addScript(arrayPath + 'chunk.js');
addScript(arrayPath + 'compact.js');
addScript(arrayPath + 'difference.js');
addScript(arrayPath + 'drop.js');
addScript(arrayPath + 'dropRight.js');
addScript(arrayPath + 'dropWhile.js');
addScript(arrayPath + 'findIndex.js');
addScript(arrayPath + 'flatten.js');
addScript(arrayPath + 'fromPairs.js');
addScript(arrayPath + 'join.js');
addScript(arrayPath + 'remove.js');
addScript(arrayPath + 'uniq.js');