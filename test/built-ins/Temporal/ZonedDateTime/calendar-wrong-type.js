// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime
description: >
  Appropriate error thrown when argument cannot be converted to a valid string
  for Calendar
features: [BigInt, Symbol, Temporal]
---*/

const primitiveTests = [
  [null, "null"],
  [true, "boolean"],
  [1, "number"],
  [1n, "bigint"],
  [-19761118, "negative number"],
  [19761118, "large positive number"],
  [1234567890, "large integer"],
];

for (const [arg, description] of primitiveTests) {
  assert.throws(
    TypeError,
    () => new Temporal.ZonedDateTime(0n, "UTC", arg),
    `${description} is not a valid calendar`
  );
}

const typeErrorTests = [
  [Symbol(), "symbol"],
  [{}, "object"],
  [new Temporal.Duration(), "duration instance"],
];

for (const [arg, description] of typeErrorTests) {
  assert.throws(TypeError, () => new Temporal.ZonedDateTime(0n, "UTC", arg), `${description} is not a valid object and does not convert to a string`);
}
