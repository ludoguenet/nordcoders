import { test, expect } from "vitest";

const solveDelta = (
    a: number, b: number, c: number
): number => {
    return Math.pow(a, 2) - (4 * a * c);
}

const findEquationRoots = (
    delta: number, a: number, b: number
): Array<number|null> => {
    if (delta < 0) {
        return [
            null,
            null,
        ];
    }

    if (delta > 0) {
        return [
            (-b + Math.sqrt(delta)) / (2 * a),
            (-b - Math.sqrt(delta)) / (2 * a)
        ];
    }

    return [
        (-b / 2 * a),
    ];
}

test('it solves delta', () => {
    expect(solveDelta(1, 3, 10)).toBe(-39);
});

test('it finds equation roots', () => {
    expect(findEquationRoots(solveDelta(1, 3, 10), 1, 3)).toContain(null);
});