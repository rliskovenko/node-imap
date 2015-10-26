var tls     = require( 'tls' ),
    _       = require( 'underscore' ),
    rootCAs = require( 'ssl-root-cas' ).rootCas;

module.exports.connect = function ( options, callback ) {
  // Override root CAs only if they are not specified
  if ( options && !_.has( options, 'ca' ) ) {
    options.ca = rootCAs;
  }
  tls.connect( options, callback );
};