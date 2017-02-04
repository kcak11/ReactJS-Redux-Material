/*
import { Map } from 'immutable';

let person = Map({
  firstName: 'Sriram',
  lastName: 'Murthy'
});

person.firstName; // -> undefined
person.get('firstName'); // -> 'Sriram'
*/


var person = Immutable.Map({ 
    name: 'Sriram', 
    birth: 594687600000,
    phone: '12345678'
});
 //The changePhone function returns a new immutable map. 
var changePhone = function( person, newPhone ) {
    return person.set( 'phone', newPhone );
};
 /person2 is strictly different than person
var person2 = changePhone( person, '87654321' );
 
console.log( person2 == person, person2 === person );
// false false
 
console.log( person.get('phone'), person2.get( 'phone' ) );
// 12345678 87654321
 
console.log( person.phone, person2.phone );
// undefined undefined

/*
The immutable abstraction is intelligent enough to detect when an 
	attribute is changed to the same value as before.
 	In this case, both == and === comparisons return true,
  	as the return of the o.set method is o. 
  	In all other cases, a real change takes place,
   	and a new object reference is returned.
    This is why person5 is not equal to person even 
    though they have the exact same keys and values. 
*/
var person3 = changePhone( person, '12345678' );
 
console.log( person3 == person, person3 === person );
// true true
 
var person4 = changePhone( person, '87654321' );
var person5 = changePhone( person4, '12345678' );
 
console.log( person5 == person, person5 === person );
// false false