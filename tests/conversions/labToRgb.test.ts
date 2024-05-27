import { labToRgb } from '@/conversions/labToRgb';

describe('labToRgb', () => {
    const colorCloseTo = (received: string, expected: string, tolerance: number = 1): boolean => {
        const extractRgb = (rgb: string) => {
            const [r, g, b] = rgb.match(/\d+/g)?.map(Number) || [];
            return { r, g, b };
        };

        const receivedRgb = extractRgb(received);
        const expectedRgb = extractRgb(expected);

        return (
            Math.abs(receivedRgb.r - expectedRgb.r) <= tolerance &&
            Math.abs(receivedRgb.g - expectedRgb.g) <= tolerance &&
            Math.abs(receivedRgb.b - expectedRgb.b) <= tolerance
        );
    };

    test('converts LAB to RGB string correctly', () => {
        expect(colorCloseTo(labToRgb(53.24, 80.09, 67.20), 'rgb(255, 0, 0)')).toBe(true); // Red
        expect(colorCloseTo(labToRgb(87.74, -86.18, 83.18), 'rgb(0, 255, 0)')).toBe(true); // Green
        expect(colorCloseTo(labToRgb(32.30, 79.20, -107.86), 'rgb(0, 0, 255)')).toBe(true); // Blue
        expect(colorCloseTo(labToRgb(97.14, -21.55, 94.48), 'rgb(255, 255, 0)')).toBe(true); // Yellow
        expect(colorCloseTo(labToRgb(0.00, 0.00, 0.00), 'rgb(0, 0, 0)')).toBe(true); // Black
        expect(colorCloseTo(labToRgb(100.00, 0.00, 0.00), 'rgb(255, 255, 255)')).toBe(true); // White
        expect(colorCloseTo(labToRgb(53.59, 0.00, 0.00), 'rgb(128, 128, 128)')).toBe(true); // Grey
    });

    test('converts LAB to RGB object correctly', () => {
        let result = labToRgb(53.24, 80.09, 67.20, false);
        expect(result.r).toBeCloseTo(255, 0);
        expect(result.g).toBeCloseTo(1, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = labToRgb(87.74, -86.18, 83.18, false);
        expect(result.r).toBeCloseTo(1, 0);
        expect(result.g).toBeCloseTo(255, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = labToRgb(32.30, 79.20, -107.86, false);
        expect(result.r).toBeCloseTo(0, 0);
        expect(result.g).toBeCloseTo(0, 0);
        expect(result.b).toBeCloseTo(255, 0);

        result = labToRgb(97.14, -21.55, 94.48, false);
        expect(result.r).toBeCloseTo(255, 0);
        expect(result.g).toBeCloseTo(255, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = labToRgb(0.00, 0.00, 0.00, false);
        expect(result.r).toBeCloseTo(0, 0);
        expect(result.g).toBeCloseTo(0, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = labToRgb(100.00, 0.00, 0.00, false);
        expect(result.r).toBeCloseTo(255, 0);
        expect(result.g).toBeCloseTo(255, 0);
        expect(result.b).toBeCloseTo(255, 0);

        result = labToRgb(53.59, 0.00, 0.00, false);
        expect(result.r).toBeCloseTo(128, 0);
        expect(result.g).toBeCloseTo(128, 0);
        expect(result.b).toBeCloseTo(128, 0);
    });

    test('handles intermediate values correctly', () => {
        let result = labToRgb(60.00, 10.00, 20.00, false);
        expect(result.r).toBeCloseTo(174, 0);
        expect(result.g).toBeCloseTo(137, 0);
        expect(result.b).toBeCloseTo(110, 0);

        result = labToRgb(70.00, -20.00, 20.00, false);
        expect(result.r).toBeCloseTo(147, 0);
        expect(result.g).toBeCloseTo(180, 0);
        expect(result.b).toBeCloseTo(134, 0);

        result = labToRgb(50.00, 50.00, -50.00, false);
        expect(result.r).toBeCloseTo(158, 0);
        expect(result.g).toBeCloseTo(87, 0);
        expect(result.b).toBeCloseTo(205, 0);

        result = labToRgb(30.00, 20.00, 10.00, false);
        expect(result.r).toBeCloseTo(104, 0);
        expect(result.g).toBeCloseTo(58, 0);
        expect(result.b).toBeCloseTo(56, 0);
    });

    test('throws error for invalid values', () => {
        expect(() => labToRgb(-10, 0, 0)).toThrow('Invalid LAB color value -10, 0,0');
        expect(() => labToRgb(50, -129, 0)).toThrow('Invalid LAB color value 50, -129,0');
        expect(() => labToRgb(50, 0, 128)).toThrow('Invalid LAB color value 50, 0,128');
        expect(() => labToRgb(101, 0, 0)).toThrow('Invalid LAB color value 101, 0,0');
    });
});
