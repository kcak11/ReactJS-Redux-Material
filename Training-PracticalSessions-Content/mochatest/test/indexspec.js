// in TDD , first write test code

var chai=require('chai');
var expect= require('chai').expect;

var word=require('../index'); // change this

describe('sanitize',function(){
	// level 1
	//it('return lowercase of string');
	//it('remove any hipen');


//hooks
console.log('hooks');
beforeEach(function(){
	console.log('before each test');
});

before(function(){
	console.log('before all tests')
})

after(function(){
	console.log('after');
})
//level 2
/*
it('testing expects',function(){
	var word='Hello World';
	expect(word).to.equal('Hello World');	
	expect(word).to.be.a('string');
	expect(word).to.contain('Hello');
	});
	*/

//Level 3
it('testing expects',function(){
 var inputWord='Hello World';
 var outputWord= word.sanitize(inputWord);
 expect(outputWord).to.equal('hello world');
	}); 

});

// for tokanize
describe('Tokenize suite',function(){
	//it('return array of word'); // if you run test now , mocha says one pending
it('return array of word',function(){
	var sentence="hello world";
	var toksentence=word.tokenize(sentence);
	expect(toksentence).to.include.members(['hello','world']);
	});	
})