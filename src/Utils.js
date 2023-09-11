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
	let result = "{";
	if (obj) {
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
	}

	result += "}";

	return result;
};

module.exports = {
	pickObject,
	toString,
};
