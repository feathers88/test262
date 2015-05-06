// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-3-181
description: >
    Object.defineProperty - 'writable' property in 'Attributes' is
    false  (8.10.5 step 6.b)
includes: [propertyHelper.js]
---*/

var obj = { };

Object.defineProperty(obj, "property", { writable: false });

assert(obj.hasOwnProperty("property"));
verifyNotWritable(obj, "property");
