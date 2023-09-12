const Utils = require("./Utils");

const MIN_MONTH = 1;
const MAX_MONTH = 12;
const LOCALE = "en-us";

module.exports = class YearMonth {
	#year = null;
	#month = null;

	constructor(year, month) {
		this.#year = year;
		this.#month = month;
	}

	/**
	 * Set YearMonth by a specified Date
	 * @param {Date} date
	 */
	fromDate(date) {
		if (date) {
			this.#year = date.getFullYear();
			this.#month = date.getMonth() + 1;
		}
	}

	/**
	 * Move YearMonth to forward or back by integer increment
	 * @param {Number} increment
	 * @returns
	 */
	move(increment) {
		if (increment) {
			let date = new Date(this.#year, this.#month - 1, 1);
			date.setMonth(date.getMonth() + increment);

			this.fromDate(date);
		}

		return this;
	}

	/**
	 * Move YearMonth to previous. Same that 'move(-1)'
	 */
	previous() {
		this.move(-1);
	}

	/**
	 * Move YearMonth to next. Same that 'move(1)'
	 */
	next() {
		this.move(1);
	}

	toString() {
		return Utils.toString(this);
	}

	get year() {
		return this.#year;
	}

	get month() {
		return this.#month;
	}

	/**
	 * Get a string in format 'MonthName'
	 */
	get monthDescription() {
		return new Date(this.#year, this.#month - 1).toLocaleDateString(LOCALE, {
			month: "long",
		});
	}

	/**
	 * Get a string in format 'MonthName Year'
	 */	
	get description() {
		return new Date(this.#year, this.#month - 1).toLocaleDateString(LOCALE, {
			year: "numeric",
			month: "long",
		});
	}

	/**
	 * Get a object { year, month }
	 */
	get value() {
		return { year: this.#year, month: this.#month };
	}
};
