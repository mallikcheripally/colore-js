import { xyzToRgb } from '@/conversions/xyzToRgb';

describe('xyzToRgb', () => {
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

    test('converts XYZ to RGB string correctly', () => {
        expect(colorCloseTo(xyzToRgb(41.24, 21.26, 1.93), 'rgb(255, 0, 0)')).toBe(true); // Red
        expect(colorCloseTo(xyzToRgb(35.76, 71.52, 11.92), 'rgb(0, 255, 0)')).toBe(true); // Green
        expect(colorCloseTo(xyzToRgb(18.05, 7.22, 95.05), 'rgb(0, 0, 255)')).toBe(true); // Blue
        expect(colorCloseTo(xyzToRgb(77.00, 92.78, 13.85), 'rgb(255, 255, 0)')).toBe(true); // Yellow
        expect(colorCloseTo(xyzToRgb(0.00, 0.00, 0.00), 'rgb(0, 0, 0)')).toBe(true); // Black
        expect(colorCloseTo(xyzToRgb(95.05, 100.00, 108.88), 'rgb(255, 255, 255)')).toBe(true); // White
        expect(colorCloseTo(xyzToRgb(20.52, 21.59, 23.32), 'rgb(128, 128, 128)')).toBe(true); // Grey
    });

    test('converts XYZ to RGB object correctly', () => {
        let result = xyzToRgb(41.24, 21.26, 1.93, false);
        expect(result.r).toBeCloseTo(255, 0);
        expect(result.g).toBeCloseTo(0, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = xyzToRgb(35.76, 71.52, 11.92, false);
        expect(result.r).toBeCloseTo(0, 0);
        expect(result.g).toBeCloseTo(255, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = xyzToRgb(18.05, 7.22, 95.05, false);
        expect(result.r).toBeCloseTo(0, 0);
        expect(result.g).toBeCloseTo(0, 0);
        expect(result.b).toBeCloseTo(255, 0);

        result = xyzToRgb(77.00, 92.78, 13.85, false);
        expect(result.r).toBeCloseTo(255, 0);
        expect(result.g).toBeCloseTo(255, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = xyzToRgb(0.00, 0.00, 0.00, false);
        expect(result.r).toBeCloseTo(0, 0);
        expect(result.g).toBeCloseTo(0, 0);
        expect(result.b).toBeCloseTo(0, 0);

        result = xyzToRgb(95.05, 100.00, 108.88, false);
        expect(result.r).toBeCloseTo(255, 0);
        expect(result.g).toBeCloseTo(255, 0);
        expect(result.b).toBeCloseTo(255, 0);

        result = xyzToRgb(20.52, 21.59, 23.32, false);
        expect(result.r).toBeCloseTo(128, 0);
        expect(result.g).toBeCloseTo(128, 0);
        expect(result.b).toBeCloseTo(127);
    });

    test('handles intermediate values correctly', () => {
        let result = xyzToRgb(48.05, 42.37, 7.97, false);
        expect(result.r).toBeCloseTo(239, 0);
        expect(result.g).toBeCloseTo(156, 0);
        expect(result.b).toBeCloseTo(43, 0);

        result = xyzToRgb(25.0, 35.0, 50.0, false);
        expect(result.r).toBeCloseTo(42, 0);
        expect(result.g).toBeCloseTo(176, 0);
        expect(result.b).toBeCloseTo(183, 0);

        result = xyzToRgb(20.0, 25.0, 30.0, false);
        expect(result.r).toBeCloseTo(95, 0);
        expect(result.g).toBeCloseTo(146, 0);
        expect(result.b).toBeCloseTo(144, 0);

        result = xyzToRgb(30.0, 40.0, 50.0, false);
        expect(result.r).toBeCloseTo(92, 0);
        expect(result.g).toBeCloseTo(184, 0);
        expect(result.b).toBeCloseTo(181, 0);
    });

    test('throws error for invalid values', () => {
        expect(() => xyzToRgb(-10, 50, 50)).toThrow('Invalid XYZ color value -10, 50, 50');
        expect(() => xyzToRgb(100, -10, 50)).toThrow('Invalid XYZ color value 100, -10, 50');
        expect(() => xyzToRgb(100, 50, -10)).toThrow('Invalid XYZ color value 100, 50, -10');
    });
});
