/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */


// van
function findIndexVan (array, predicate, fromIndex) {
    if (!Array.isArray(array)) return -1;
    fromIndex = fromIndex || 0;

    var resIndex = -1;
    if (typeof predicate === 'function') {
        for (var i = fromIndex; i < array.length; i++) {
            if (predicate(array[i])) {
                resIndex = i;
                break;
            }
        }
    }

    if (predicate.constructor === Object) {
        for (var i = fromIndex; i < array.length; i++) {
            let item = array[i];
            if (Object.keys(predicate).every(key => predicate[key] === item[key])) {
                resIndex = i;
                break;
            }
        }
    }

    if (Array.isArray(predicate)) {
        var predicateKey = predicate[0];
        var predicateValue = predicate[1];
        for (var i = fromIndex; i < array.length; i++) {
            let item = array[i];
            if ((predicateKey in item) && item[predicateKey] === predicateValue) {
                resIndex = i;
                break;
            }
        }
    }

    if (typeof predicate === 'string') {
        for (var i = fromIndex; i < array.length; i++) {
            let item = array[i];
            if ((predicate in item) && item[predicate]) {
                resIndex = i;
                break;
            }
        }
    }

    return resIndex;
}

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true },
    { 'user': 'pebbles', 'active': true },
];

var resIndex = findIndexVan(users, (item) => {
    return item['user'] === 'pebbles';
}, 0);

var resIndex2 = findIndexVan(users, { 'user': 'pebbles', 'active': true}, 3);

var resIndex3 = findIndexVan(users, ['user', 'pebbles'], 1);

var resIndex4 = findIndexVan(users, 'user', 0);
console.log(resIndex4);