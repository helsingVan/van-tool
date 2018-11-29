/**
 * array find
 */


function findVan (array, predicate) {
    var returnItem;

    for(var i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            returnItem = array[i];
            break;
        }
    }
    return returnItem;
}

function findLastVan (array, predicate) {
    var returnItem;

    for(var i = array.length - 1; i > -1; i--) {
        if (predicate(array[i])) {
            returnItem = array[i];
            break;
        }
    }
    return returnItem;
}