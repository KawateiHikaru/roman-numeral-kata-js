module.exports = {
	converter: function(decimal) {
		// Roman numerals has 7 Symbols
		// I ==    1
		// V ==    5
		// X ==   10
		// L ==   50
		// C ==  100
		// D ==  500
		// M == 1000

		// // Each Numeral can not show up more then 3 Times
		// // eg, Minimal Number is 1, max Number is 3999

		var lookups = new Map([
			[1000, 'M'],
			[900, 'CM'],
			[500, 'D'],
			[400, 'CD'],
			[100, 'C'],
			[90, 'XC'],
			[50, 'L'],
			[40, 'XL'],
			[10, 'X'],
			[9, 'IX'],
			[5, 'V'],
			[4, 'IV'],
			[1, 'I'],
		]);

		var remainder = decimal;
		var stack = [];

		// go through the numerals and push them to a stack
		for ([key, value] of lookups) {
			while (remainder >= key)
			{
				remainder -= key;
				stack.push(value);
			}
		}

		// join
		return stack.join('');
	}
}