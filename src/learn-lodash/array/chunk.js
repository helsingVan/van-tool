/**
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

function chunk (array, size) {
    size = Math.max(size, 0);
    var length = array == null ? 0 : array.length;
    if (!length || size < 1) {
        return [];
    }

    var resArray = new Array(Math.ceil(length/size));
    var index = 0;
    var resIndex = 0;

    while (index < length) {
        resArray[resIndex++] = array.slice(index, index += size);
    }

    return resArray;
}
