/**
 * Creates a slice of `array` excluding elements dropped from the beginning.
 * Elements are dropped until `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * const users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': true },
 *   { 'user': 'pebbles', 'active': false }
 * ]
 *
 * dropWhile(users, ({ active }) => active)
 * // => objects for ['pebbles']
 */


// van

function dropWhileVan (array, predicate) {
    if (!Array.isArray(array)) return [];

    if (typeof predicate === 'function') {
        return array.filter(item => {
            return !predicate(item);
        });
    }
    if (predicate.constructor === Object) {
        return array.filter(item => {
            return !Object.keys(predicate).every(key => item[key] === predicate[key])
        });
    }
}

// var a = [
//     { name: 'fan', tag: false },
//     { name: 'guang', tag: false },
//     { name: 'fei', tag: true },
// ]

// let res = dropWhileVan(a, (item) => {
//     return !item.tag;
// });
// let resByObj = dropWhileVan(a, { name: 'fan', tag: false });
// console.log(resByObj);