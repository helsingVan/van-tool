/**
 * array map
 */

function mapVan (array, predicate) {
    var resList = [];

    for (var i = 0; i < array.length; i++) {
        resList[i] = predicate(array[i]);
    }

    return resList;
}