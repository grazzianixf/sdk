const Utils = require("./Utils");

const MIN_MONTH = 1;
const MAX_MONTH = 12;
const LOCALE = 'en-us';

module.exports = class YearMonth {
	#year = null;
	#month = null;

	constructor(year, month) {
		this.#year = year;
		this.#month = month;
	}

	#move(increment) {
		// console.log("increment", increment)
	}

	previous() {
		// this.#move(-1)
		if (this.#month == MIN_MONTH) {
			this.#month = MAX_MONTH;
			this.#year = this.#year - 1;
		} else {
			this.#month = this.#month - 1;
		}
	}

	next() {
		// this.#move(1)
		if (this.#month == MAX_MONTH) {
			this.#month = MIN_MONTH;
			this.#year = this.#year + 1;
		} else {
			this.#month = this.#month + 1;
		}
	}

	toString(){
		return Utils.toString(this);
	}

	get year() {
		return this.#year;
	}

	get month() {
		return this.#month;
	}

	get monthDescription() {
		return `Month ${this.#month}`;
   }
	
   
   get description() {
      return new Date(this.#year,this.#month-1).toLocaleDateString(LOCALE, { year:"numeric", month:"long"})
   }
};
