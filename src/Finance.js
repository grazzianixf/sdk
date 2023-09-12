const Utils = require("./../src/Utils");

/**
 * 
 * @param {Number} dividend 
 * @param {Number} divisor 
 * @param {Number} decimalPlace 
 * @returns An array that contains a set of items with dividend prorated among these items
 */
function divideWithProratedRemainder(dividend, divisor, decimalPlace = 2) {

   if (!divisor || divisor === 0) {
      return
   }

	let result = [];
	let multiplier = Math.pow(10, decimalPlace);
	let roundedDownValue = Math.floor((dividend / divisor) * multiplier) / multiplier;

	for (let i = 0; i < divisor; i++) {
		result.push({ rownum: i + 1, size: divisor, value: roundedDownValue });
	}

   let total = Utils.Array.sumField(result, "value", decimalPlace)

   if ((Math.round(total * multiplier) / multiplier) != (Math.round(dividend * multiplier) / multiplier)) {
      let remainder = Math.round(((Math.round(dividend * multiplier) / multiplier) - (Math.round(total * multiplier) / multiplier)) * multiplier) / multiplier
      
      let i = 0
      let remainderOneUnit = 1 / multiplier
      while (remainder > 0) {
         result[i].value += remainderOneUnit
         remainder -= remainderOneUnit
         i++
      }
   }

	return result;
}

module.exports = {
	divideWithProratedRemainder,
};
