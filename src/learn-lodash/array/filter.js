/**
 * array filter
 */


function filterVan (array, predicate) {
    var resList = [];

    for (var i = 0; i < array.length; i++) {
        if (predicate([array[i]])) {
            resList.push(array[i]);
        }
    }

    return resList;
}