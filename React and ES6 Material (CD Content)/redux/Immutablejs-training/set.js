var s1 = Immutable.Set( [2, 1] );
var s2 = Immutable.Set( [2, 3, 3] );
var s3 = Immutable.Set( [1, 1, 1] );
 
console.log( s1.count(), s2.size, s3.count() );
// 2 2 1
 
console.log( s1.toJS(), s2.toArray(), s3.toJSON() );
// [2, 1] [2, 3] [1]
 
var s1S2IntersectArray = s1.intersect( s2 ).toJSON();
// [2]