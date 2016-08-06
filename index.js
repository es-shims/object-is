'use strict';

/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is */

var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = Object.is || function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	} else if (a === b) {
		return true;
	} else if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};
