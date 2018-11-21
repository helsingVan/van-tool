/**
 * Creates a slice of `array` with `n` elements dropped from the end.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to query.
 * @param {number} [n=1] The number of elements to drop.
 * @returns {Array} Returns the slice of `array`.
 * @example
 *
 * dropRight([1, 2, 3])
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2)
 * // => [1]
 *
 * dropRight([1, 2, 3], 5)
 * // => []
 *
 * dropRight([1, 2, 3], 0)
 * // => [1, 2, 3]
 */



// van
function dropRightVan (array, size) {
    size = size == null ? 1 : size;
    if (!Array.isArray(array)) return [];

    size = size === 0 ? array.length : -size;
    return array.slice(0, size);
}