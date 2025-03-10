// Copyright (C) 2025 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-date.prototype.setutchours
description: Return value for valid dates (setting UTC hour)
info: |
  1. Let dateObject be the this value.
  2. Perform ? RequireInternalSlot(dateObject, [[DateValue]]).
  3. Let t be dateObject.[[DateValue]].
  4. Let h be ? ToNumber(hour).
  5. If min is present, let m be ? ToNumber(min).
  6. If sec is present, let s be ? ToNumber(sec).
  7. If ms is present, let milli be ? ToNumber(ms).
  8. If t is NaN, return NaN.
  9. If min is not present, let m be MinFromTime(t).
  10. If sec is not present, let s be SecFromTime(t).
  11. If ms is not present, let milli be msFromTime(t).
  12. Let date be MakeDate(Day(t), MakeTime(h, m, s, milli)).
  13. Let v be TimeClip(date).
  14. Set dateObject.[[DateValue]] to v.
  15. Return v.
---*/

var date = new Date(Date.UTC(2016, 6, 1));
var returnValue, expected;

returnValue = date.setUTCHours(6);

expected = Date.UTC(2016, 6, 1, 6);
assert.sameValue(
  returnValue, expected, 'hour within unit boundary (return value)'
);
assert.sameValue(
  date.getTime(), expected, 'hour within unit boundary ([[DateValue]] slot)'
);

returnValue = date.setUTCHours(-1);

expected = Date.UTC(2016, 5, 30, 23);
assert.sameValue(
  returnValue, expected, 'hour before time unit boundary (return value)'
);
assert.sameValue(
  date.getTime(),
  expected,
  'hour before time unit boundary ([[DateValue]] slot)'
);

returnValue = date.setUTCHours(24);

expected = Date.UTC(2016, 6, 1, 0);
assert.sameValue(
  returnValue, expected, 'hour after time unit boundary (return value)'
);
assert.sameValue(
  date.getTime(),
  expected,
  'hour after time unit boundary ([[DateValue]] slot)'
);
