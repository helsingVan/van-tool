 /**
 * Removes all elements from `array` that `predicate` returns truthy for
 * and returns an array of the removed elements. The predicate is invoked
 * with three arguments: (value, index, array).
 *
 * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
 * to pull elements from an array by value.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new array of removed elements.
 * @example
 *
 * var array = [1, 2, 3, 4];
 * var evens = _.remove(array, function(n) {
 *   return n % 2 == 0;
 * });
 *
 * console.log(array);
 * // => [1, 3]
 *
 * console.log(evens);
 * // => [2, 4]
 */

function removeVan (array, predicate) {
    var removeList = [];
    var index = 0;
    while (index < array.length) {
        if (predicate(array[index])) {
            removeList.push(array.splice(index, 1)[0]);
            continue;
        }
        index++;
    }
    return removeList;
}

var list = [1, 2,3,4,5,5,6,7,8,9,10];

var removeList = removeVan(list, (item) => {
    return item > 5;
});