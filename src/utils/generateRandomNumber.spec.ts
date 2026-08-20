import { afterEach, describe, expect, it, vi } from 'vitest';
import { generateRandomNumber } from './generateRandomNumber';

describe('generateRandomNumber', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns the minimum value when Math.random() returns 0', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    expect(generateRandomNumber(1, 10)).toBe(1);
  });

  it('returns the maximum value when Math.random() is close to 1', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999999);

    expect(generateRandomNumber(1, 10)).toBe(10);
  });

  it('returns a value within the specified range', () => {
    const result = generateRandomNumber(1, 10);

    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  });

  it('returns an integer', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.42);

    const result = generateRandomNumber(1, 100);

    expect(Number.isInteger(result)).toBe(true);
  });

  it('returns min when min and max are the same', () => {
    expect(generateRandomNumber(5, 5)).toBe(5);
  });
});
