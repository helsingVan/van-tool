/**
 * array every
 */

function everyVan (array, predicate) {
    var resFlag = true;
    for (var i = 0; i < array.length; i++) {
        if (!predicate(array[i])) {
            resFlag = false;
            break;
        }
    }
    return resFlag;
}