// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

test('valid phone number: 123-456-78990', () => {
  expect(isPhoneNumber('123-456-7899')).toBe(true);
});

test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});

test('valid email: vtn018@example.com', () => {
  expect(isEmail('vtn018@example.com')).toBe(true);
});

test('valid email: hello@world.org', () => {
  expect(isEmail('hello@world.org')).toBe(true);
});

test('invalid email: vtn018@com', () => {
  expect(isEmail('vtn018@com')).toBe(false);
});

test('invalid email: user@.com', () => {
  expect(isEmail('user@.com')).toBe(false);
});

test('strong password: iloveucsd123', () => {
  expect(isStrongPassword('iloveucsd123')).toBe(true);
});

test('valid strong password: a_b1', () => {
  expect(isStrongPassword('a_b1')).toBe(true);
});

test('invalid password (starts with number): 1ucsd', () => {
  expect(isStrongPassword('1ucsd')).toBe(false);
});

test('invalid strong password: ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});

test('valid date: 5/5/2025', () => {
  expect(isDate('5/5/2025')).toBe(true);
});

test('valid date: 12/27/2002', () => {
  expect(isDate('12/27/2002')).toBe(true);
});

test('invalid date: 2025/5/5', () => {
  expect(isDate('2025/5/5')).toBe(false);
});

test('invalid date: 01-01-2025', () => {
  expect(isDate('01-01-2025')).toBe(false);
});

test('valid hex color: #aaa', () => {
  expect(isHexColor('#aaa')).toBe(true);
});

test('valid hex color: #aaabbb', () => {
  expect(isHexColor('#aaabbb')).toBe(true);
});

test('invalid hex color: #6666a', () => {
  expect(isHexColor('#6666a')).toBe(false);
});

test('invalid hex color: #12g', () => {
  expect(isHexColor('#12g')).toBe(false);
});
