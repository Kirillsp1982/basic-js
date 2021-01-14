module.exports = function repeater( str, options ) {
	str = String(str);
	let addition = String(options.addition);
	let additionString = '';
	let repeatString = '';
	let resultString = '';
	separator = options.separator || '+';
	additionSeparator = options.additionSeparator || '|';
	
	if (typeof options.additionRepeatTimes === 'number') {
		for (let i = 1; i < options.additionRepeatTimes; i++) {			
			additionString = additionString + addition + additionSeparator;
		}
		additionString += addition;
	}
	
	if (typeof options.repeatTimes === 'number') {
		
		repeatString = str + additionString;
		for (let j = 1; j < options.repeatTimes; j++) {			
			resultString = resultString + repeatString + separator; 
		}
		resultString += repeatString;
	}else return str + addition;
	return resultString;
};
