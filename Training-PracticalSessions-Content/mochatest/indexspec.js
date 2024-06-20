// in TDD , first write test code
//npm install chai --save-dev
var chai=require('chai');
var expect= require('chai').expect;
var word=require('./index');
describe('sanitize',function(){
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
it('testing expects',function(){
 var inputWord='Hello World';
 var outputWord= word.sanitize(inputWord);
 expect(outputWord).to.equal('hello world');
	}); 
});
//> mocha indexspec.js