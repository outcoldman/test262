/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.4/15.4.4/15.4.4.17/15.4.4.17-7-c-ii-6.js
 * @description Array.prototype.some - arguments to callbackfn are self consistent
 */


function testcase() {

        var obj = { 0: 11, length: 1 };
        var thisArg = {};

        function callbackfn() {
            return this === thisArg && arguments[0] === 11 && arguments[1] === 0 && arguments[2] === obj;
        }

        return Array.prototype.some.call(obj, callbackfn, thisArg);
    }
runTestCase(testcase);
