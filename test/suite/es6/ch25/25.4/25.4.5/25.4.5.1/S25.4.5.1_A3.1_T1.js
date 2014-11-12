// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
    catch(arg) is equivalent to then(undefined, arg)
author: Sam Mikes
description: catch is implemented in terms of then
---*/

var obj = {};

var p = Promise.resolve(obj);

p.catch(function () {
    $ERROR("Should not be called - promise is fulfilled");
}).then(function (arg) {
    if (arg !== obj) {
        $ERROR("Expected promise to be fulfilled with obj, got " + arg);
    }
}).then($DONE, $DONE);
