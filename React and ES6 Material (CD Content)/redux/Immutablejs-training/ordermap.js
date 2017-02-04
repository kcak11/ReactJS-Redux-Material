var basket = Immutable.OrderedMap()
                      .set( 'Captain Immutable 1', 495 )
                      .set( 'The Immutable Bat Rises 1', 995 );
 
console.log( basket.first(), basket.last() );
// 495 995
 
JSON.stringify( basket );
// '{"Captain Immutable 1":495,"The Immutable Bat Rises 1":995}'
 
var basket2 = basket.set( 'Captain Immutable 1', 695 );
 
JSON.stringify( basket2 );
// '{"Captain Immutable 1":695,"The Immutable Bat Rises 1":995}'
 
var basket3 = basket2.sortBy( function( value, key ) { 
    return -value; 
} );
 
JSON.stringify( basket3 );
// '{"The Immutable Bat Rises 1":995,"Captain Immutable 1":695}'