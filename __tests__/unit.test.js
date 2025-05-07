// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// TODO - Part 2
// Testing isPhoneNumber
test('123-456-7890 is a valid number', () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test('(135) 246-7980 is a valid number', () => {
  expect(isPhoneNumber('(135) 246-7980')).toBe(true);
});
test('1234567890 is an invalid number', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});
test('234 1083 is an invalid number', () => {
  expect(isPhoneNumber('234 1083')).toBe(false);
});

// Testing isEmail
test('jdoe@hotmail.com is a valid email', () => {
  expect(isEmail('jdoe@hotmail.com')).toBe(true);
});
test('powellpuff@ucsd.edu is a valid email', () => {
  expect(isEmail('powellpuff@ucsd.edu')).toBe(true);
});
test('chillguy@.com is not a valid email', () => {
  expect(isEmail('chillguy@.com')).toBe(false);
})
test('notchillguy@gmail is a not a valid email', () => {
  expect(isEmail('notchilguys@gmail')).toBe(false);
})

// Testing isStrongPassword
test('password is a strong password', () => {
  expect(isStrongPassword("password")).toBe(true);
});
test('hello_world2000 is a strong password', () => {
  expect(isStrongPassword("hello_world2000")).toBe(true);
});
test('123456 is not a strong password', () => {
  expect(isStrongPassword("123456")).toBe(false);
});
test('abcdefghijklmnopqrstuvwxyz is not a strong password', () => {
  expect(isStrongPassword("abcdefghijklmnopqrstuvwxyz")).toBe(false);
});

// Testing isDate
test('9/21/2025 is a valid date', function() {
  expect(isDate("9/21/2025")).toBe(true);
});
test('20/20/1900 is a valid date', () => {
  expect(isDate('01/01/1900')).toBe(true);
});
test('10/31/13 is not a valid date', () => {
  expect(isDate('10/31/13')).toBe(false);
});
test("012/10/2310 is not a valid date", () => {
  expect(isDate("012/10/2310")).toBe(false);
});

// Testing isHexColor
test('#123ABC is a valid color', () => {
  expect(isHexColor("#123ABC")).toBe(true);
});
test('#fF0 is a valid color', () => {
  expect(isHexColor("#fF0")).toBe(true);
});
test("AAAAAG is not a valid color", () => {
  expect(isHexColor("AAAAAG")).toBe(false);
});
test("#123456F is not a valid color", () => {
  expect(isHexColor("#123456F")).toBe(false);
})