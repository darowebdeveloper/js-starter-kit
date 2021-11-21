// This file is not transpiled, so must use CommonJS and ES5

// Register babe to transile before out test run
require("@babel/register")();

// Disable wepback features that Mocha does not understand
require.extensions[".css"] = function () {};
