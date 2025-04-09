// Copyright (C) 2025 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime.compare
description: Invalid ISO string as calendar should throw RangeError
features: [Temporal]
---*/

const invalidStrings = [
  ["", "empty string"],
];
  
for (const [calendar, description] of invalidStrings) {
  const arg = { year: 1976, monthCode: "M11", day: 18, calendar };
  assert.throws(
    RangeError,
    () => Temporal.PlainDateTime.compare(arg, new Temporal.PlainDateTime(1976, 11, 18)),
    `${description} is not a valid calendar ID (first argument)`
  );
  assert.throws(
    RangeError,
    () => Temporal.PlainDateTime.compare(new Temporal.PlainDateTime(1976, 11, 18), arg),
    `${description} is not a valid calendar ID (second argument)`
  );
}
