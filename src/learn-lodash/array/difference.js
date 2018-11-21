/**
 * Creates an array of `array` values not included in the other given arrays
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. The order and references of result values are
 * determined by the first array.
 *
 * **Note:** Unlike `pullAll`, this method returns a new array.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {...Array} [values] The values to exclude.
 * @returns {Array} Returns the new array of filtered values.
 * @see union, unionBy, unionWith, without, xor, xorBy, xorWith,
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 * a, b两个素组，筛选a中有哪些元素不在b中。
 */



function differenceVanEs5 (array1, array2) {
    if (!Array.isArray(array1)) return [];
    if (!Array.isArray(array2)) return [];

    var resArray = [];
    array1.forEach(item => {
        if (array2.indexOf(item) === -1) {
            resArray.push(item);
        }
    });
    return resArray;
}

function differenceVanEs6 (array1, array2) {
    if (!Array.isArray(array1)) return [];
    if (!Array.isArray(array2)) return [];

    var resArray = [];
    array1.forEach(item => {
        if (!array2.find(v => v === item)) {
            resArray.push(item);
        }
    });
    return resArray;
}