// -- Object
/**
 * 
 * @param {Object} obj 
 * @param  {...any} properties 
 * @returns Custom object based on specific properties from obj param
 */
const pickObject = (obj, ...properties) => {
	let newObj = {};

	if (obj && properties && properties.length > 0) {
		properties.map((prop) => (newObj[prop] = obj[prop]));
	}

	return newObj;
};

/**
 * 
 * @param {Object} obj 
 * @param  {...any} props 
 * @returns String descriptor for the object param
 */
const toString = (obj, ...props) => {
	let result = "";
	if (obj) {
		result = "{";
		if (props && props.length) {
			props.map(
				(prop, i) =>
					(result += `${prop} = ${obj[prop]}${
						i != props.length - 1 ? ", " : ""
					}`)
			);
		} else {
			let objProps = Object.keys(obj);
			objProps.map(
				(prop, i) =>
					(result += `${prop} = ${obj[prop]}${
						i != objProps.length - 1 ? ", " : ""
					}`)
			);
		}
		result += "}";
	}


	return result;
};

// -- Array

/**
 * 
 * @param {Object[]} array 
 * @param {String} fieldName 
 * @returns A object containing available properties such fieldName exists in array param
 */
const groupBy = (array, fieldName) => {
	if (array && array.length && fieldName) {
		return array.reduce((group, item) => {
			const field = item[fieldName];
			group[field] = group[field] ?? [];
			group[field].push(item);

			return group;
		  }, {});
	} else {
		return array
	}
}

/**
 * 
 * @param {Array} array 
 * @param {String} fieldName 
 * @returns A object containing counts by fieldname param in array param
 */
const countGroupBy = (array, fieldName) => {
	let result = {};

	if (array && array.length && fieldName) {
		return array.reduce((group, item) => {
			const field = item[fieldName];
			group[field] = group[field] ?? 0;
			group[field]++;

			return group;
		  }, {});
	}

	return result;
}

/**
 * 
 * @param {Array} array 
 * @param {String} fieldName 
 * @param {Number} decimalPlace 
 * @returns A number who contains the sum of all array's itemsm considering the fieldName param
 */
const sumField = (array, fieldName, decimalPlace = 2) => {
	if (!array || !array.length || !fieldName) {
		return
	}

	let result = array.reduce( (previousValue, item) => previousValue + item[fieldName], 0)
	let multiplier = Math.pow(10, decimalPlace)
	result = Math.round(result * multiplier) / multiplier
	
	return result
}

//--

module.exports = {
	Array: {
		countGroupBy,
		groupBy,
		sumField
	},
	Object: {
		pickObject,
		toString
	}
};
