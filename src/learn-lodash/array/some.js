/**
 * array some
 */

function someVan (array, predicate) {
    var resFlag = false;

    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            resFlag = true;
            break;
        }
    }

    return resFlag;
}