//List 
var qwerty = Immutable.List(['q','w','e','r','t','y']);
 
console.log(qwerty.size);// 6
 
var qwertyu = qwerty.push( 'u' );
console.log("changed:"+qwerty);
console.log("original :"+qwertyu);
// Object {size: 7, _origin: 0, _capacity: 7, _level: 5, _root: null…}
 
var qwert = qwertyu.pop().pop();
console.log("after Pop"+qwert);
// Object {size: 5, _origin: 0, _capacity: 5, _level: 5, _root: null…}
 
var wertArray = qwert.shift().toJSON();
console.log(wertArray);
// ["w", "e", "r", "t"]
 
var qwertyuiArray = qwert.concat( 'y', 'u', 'i' ).toJS();
console.log(qwertyuiArray);
// ["q", "w", "e", "r", "t", "y", "u", "i"]