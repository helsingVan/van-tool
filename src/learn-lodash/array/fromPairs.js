 /**
 * The inverse of `_.toPairs`; this method returns an object composed
 * from key-value `pairs`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} pairs The key-value pairs.
 * @returns {Object} Returns the new object.
 * @example
 *
 * _.fromPairs([['a', 1], ['b', 2]]);
 * // => { 'a': 1, 'b': 2 }
 */

 function fromPairsVan (array) {
     var obj = {};
     array.forEach(list => {
        if (!Array.isArray(list)) return;
        obj[list[0]] = list[1]
     });
     return obj;
 }

//  var list = [
//      ['a', 1],
//      ['b', 2],
//      ['c', 3]
//  ];

//  log(fromPairsVan(list));