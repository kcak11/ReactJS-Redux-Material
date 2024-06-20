var oneToInfinitySeq = Immutable.Range( 1 );
 
var isEven = function( num ) { return num % 2 === 0; }
var evenPositiveSeq = oneToInfinitySeq.filter( isEven );
 
var firstTenPositivesSeq = evenPositiveSeq.take(10);
firstTenPositivesSeq.toJSON();
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 
var firstTenElements = Immutable.Repeat( /* undefined */ )
                                .map( Math.random )
                                .take( 10 )
                                .toJSON();
// generates an array of ten random numbers