'use strict';

var implementation = require('../implementation');
var callBind = require('es-abstract/helpers/callBind');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(callBind(implementation, Object), t);

	t.end();
});
