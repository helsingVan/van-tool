/**
 * Converts all elements in `array` into a string separated by `separator`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to convert.
 * @param {string} [separator=','] The element separator.
 * @returns {string} Returns the joined string.
 * @example
 *
 * _.join(['a', 'b', 'c'], '~');
 * // => 'a~b~c'
 */

 function joinVan (array, joinStr) {
     if (!array.length) return '';
     joinStr = joinStr || ',';
     var str = '';
     array.forEach((item, index) => {
        var joinstring = index === array.length - 1 ? item : item + joinStr;
        str += joinstring;
     });
     return str;
 }

