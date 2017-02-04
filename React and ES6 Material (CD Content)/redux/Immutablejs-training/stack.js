var filo = new Immutable.Stack();
// Object {size: 0, _head: undefined, __ownerID: undefined, __hash: undefined, __altered: false}
 
var twoStoreyStack = filo.push( '2nd floor', '1st floor', 'ground floor' );
 
twoStoreyStack.size
// 3
twoStoreyStack.get()
// "2nd floor"
twoStoreyStack.get(1)
// "1st floor"
twoStoreyStack.get(2)
// "ground floor"
 
var oneStoreyStack = twoStoreyStack.pop();
var oneStoreyJSON = JSON.Stringify( oneStoreyStack );
// '["1st floor","ground floor"]'