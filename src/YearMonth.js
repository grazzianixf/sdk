const MIN_MONTH = 1
const MAX_MONTH = 12

module.exports = class YearMonth {
   #year = null
   #month = null

   constructor(year, month) {
      this.year = year
      this.month = month
   }

   previous() {
      if (this.month == MIN_MONTH) {
         this.month = MAX_MONTH
         this.year = this.year - 1
      } else {
         this.month = this.month - 1
      }
   }

   next() {
      if (this.month == MAX_MONTH) {
         this.month = MIN_MONTH
         this.year = this.year + 1
      } else {
         this.month = this.month + 1
      }
   }
}