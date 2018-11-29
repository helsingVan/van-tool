/**
 * array reduce reduceRight
 */


function reduceVan(array, predicate) {
    var pre = array[0];

    for (var i = 1; i < array.length; i++) {
        pre = predicate(pre, array[i], i, array);
    }

    return pre;
}

function reduceRightVan (array, predicate) {
    var pre = array[array.length - 1];

    for (var i = array.length - 2; i > -1; i--) {
        pre = predicate(pre, array[i], i, array);
    }

    return pre;
}