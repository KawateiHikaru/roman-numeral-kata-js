var expect    = require("chai").expect;
var c = require("../js/RomanConverter.js").converter;

describe("Roman Numeral Converter", function() {

	// var c;

	// beforeEach(function(){
		// c = new converter();
	// });

	it("should convert basic 7 types of numerals", function() {

		expect(c(1)).to.equal('I');
		expect(c(5)).to.equal('V');
		expect(c(10)).to.equal('X');
		expect(c(50)).to.equal('L');
		expect(c(100)).to.equal('C');
		expect(c(500)).to.equal('D');
		expect(c(1000)).to.equal('M');
	});

	it("should convert Double and Triples", function() {
		expect(c(2)).to.equal('II');
		expect(c(3)).to.equal('III');
		expect(c(20)).to.equal('XX');
		expect(c(30)).to.equal('XXX');
		expect(c(200)).to.equal('CC');
		expect(c(300)).to.equal('CCC');		
		expect(c(2000)).to.equal('MM');
		expect(c(3000)).to.equal('MMM');
	});

	it("should convert two digits", function(){
		expect(c(35)).to.equal('XXXV');
		expect(c(39)).to.equal('XXXIX');
		expect(c(40)).to.equal('XL');
		expect(c(50)).to.equal('L');
		expect(c(51)).to.equal('LI');
		expect(c(55)).to.equal('LV');
		expect(c(90)).to.equal('XC');
		expect(c(93)).to.equal('XCIII');
		expect(c(95)).to.equal('XCV');
		expect(c(98)).to.equal('XCVIII');
	});

	it("should convert three digits", function(){
		expect(c(100)).to.equal('C');
		expect(c(200)).to.equal('CC');
		expect(c(300)).to.equal('CCC');
		expect(c(400)).to.equal('CD');
		expect(c(500)).to.equal('D');
		expect(c(600)).to.equal('DC');
		expect(c(700)).to.equal('DCC');
		expect(c(800)).to.equal('DCCC');
		expect(c(900)).to.equal('CM');
		expect(c(999)).to.equal('CMXCIX');
	});

	it("should convert four digits", function(){
		expect(c(1000)).to.equal('M');
		expect(c(1100)).to.equal('MC');
		expect(c(1111)).to.equal('MCXI');
		expect(c(1400)).to.equal('MCD');
		expect(c(1500)).to.equal('MD');
		expect(c(1600)).to.equal('MDC');
		expect(c(1990)).to.equal('MCMXC');
		expect(c(3999)).to.equal('MMMCMXCIX');
	});

	it("should convert 1642 ", function(){
		expect(c(1642)).to.equal('MDCXLII');
	});

	// it("should print from 1 to 3999", function(){
	// 	for (var i=1;i < 4000; i++) {
	// 		console.log(i, c(i));
	// 	}
	// 	expect(true).to.be.true;
	// })
});