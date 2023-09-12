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

	fromDate(date) {
		if (date) {
			this.#year = date.getFullYear();
			this.#month = date.getMonth() + 1;
		} else {
			constructor(null, null);
		}
	}

	move(increment) {
		if (increment) {
			let date = new Date(this.#year, this.#month - 1, 1);
			date.setMonth(date.getMonth() + increment);

			this.fromDate(date);
		}

		return this;
	}

	previous() {
		this.move(-1);
	}

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

	get monthDescription() {
		return new Date(this.#year, this.#month - 1).toLocaleDateString(LOCALE, {
			month: "long",
		});
	}

	get description() {
		return new Date(this.#year, this.#month - 1).toLocaleDateString(LOCALE, {
			year: "numeric",
			month: "long",
		});
	}

	get value() {
		return { year: this.#year, month: this.#month };
	}
};
