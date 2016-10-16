var fs = require('fs');
var $ = require('jquery'); 
// var _ = require('lodash-node');
// var _ = require('underscore');

// var _ = require('underscore');
var _ = require('lodash');
console.log(_);


var r = require('./svg-to-wkt.js');


console.log(r.SVGtoWKT.convert('<svg><polygon points="1,2 3,4 5,6" /><line x1="7" y1="8" x2="9" y2="10" /></svg>'));
// r.SVGtoWKT.convert('<svg><polygon points="1,2 3,4 5,6" /><line x1="7" y1="8" x2="9" y2="10" /></svg>');

// console.log(res);