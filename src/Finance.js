function dividirComRateio(dividend, divisor) {
   const quotient = Math.floor(dividend / divisor);
   const remainder = dividend % divisor;

   let result = []

   for (let i = 0; i < divisor; i++) {
      result.push({ rownum: i + 1, size: divisor, value: quotient})
      
   }

   return result;
}

module.exports = {
   dividirComRateio
}