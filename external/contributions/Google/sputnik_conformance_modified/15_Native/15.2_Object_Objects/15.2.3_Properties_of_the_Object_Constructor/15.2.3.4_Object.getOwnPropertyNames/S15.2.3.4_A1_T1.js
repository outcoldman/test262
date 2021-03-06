// Copyright 2011 Google, Inc.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Object.getOwnProperties and Object.prototype.hasOwnProperty should
 * agree on what the own properties are.
 *
 * @description Check that all the own property names reported by
 * Object.getOwnPropertyNames on a strict function are names that
 * hasOwnProperty agrees are own properties.
 * @onlyStrict
 */
"use strict";
function foo() {}

var names = Object.getOwnPropertyNames(foo);
for (var i = 0, len = names.length; i < len; i++) {
  if (!foo.hasOwnProperty(names[i])) {
    $ERROR('Phantom own property: ' + names[i]);
  }
}