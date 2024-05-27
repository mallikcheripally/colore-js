import { rgbToXyz } from '@/conversions/rgbToXyz';

// Utility function to compare XYZ values with precision
function roundTo(num: number, precision: number) {
    const factor = Math.pow(10, precision);
    return Math.round(num * factor) / factor;
}

describe('rgbToXyz', () => {
    test('converts RGB to XYZ string correctly', () => {
        expect(rgbToXyz(255, 0, 0)).toBe('xyz(41.25, 21.27, 1.93)'); // Red
        expect(rgbToXyz(0, 255, 0)).toBe('xyz(35.76, 71.52, 11.92)'); // Green
        expect(rgbToXyz(0, 0, 255)).toBe('xyz(18.04, 7.22, 95.03)'); // Blue
        expect(rgbToXyz(255, 255, 0)).toBe('xyz(77, 92.78, 13.85)'); // Yellow
        expect(rgbToXyz(0, 0, 0)).toBe('xyz(0, 0, 0)'); // Black
        expect(rgbToXyz(255, 255, 255)).toBe('xyz(95.05, 100, 108.88)'); // White
        expect(rgbToXyz(128, 128, 128)).toBe('xyz(20.52, 21.59, 23.5)'); // Grey
    });

    test('converts RGB to XYZ object correctly', () => {
        let result = rgbToXyz(255, 0, 0, false);
        expect(result.x).toBeCloseTo(41.25, 2);
        expect(result.y).toBeCloseTo(21.27, 2);
        expect(result.z).toBeCloseTo(1.93, 2);

        result = rgbToXyz(0, 255, 0, false);
        expect(result.x).toBeCloseTo(35.76, 2);
        expect(result.y).toBeCloseTo(71.52, 2);
        expect(result.z).toBeCloseTo(11.92, 2);

        result = rgbToXyz(0, 0, 255, false);
        expect(result.x).toBeCloseTo(18.04, 2);
        expect(result.y).toBeCloseTo(7.22, 2);
        expect(result.z).toBeCloseTo(95.03, 2);

        result = rgbToXyz(255, 255, 0, false);
        expect(result.x).toBeCloseTo(77.00, 2);
        expect(result.y).toBeCloseTo(92.78, 2);
        expect(result.z).toBeCloseTo(13.85, 2);

        result = rgbToXyz(0, 0, 0, false);
        expect(result.x).toBeCloseTo(0.00, 2);
        expect(result.y).toBeCloseTo(0.00, 2);
        expect(result.z).toBeCloseTo(0.00, 2);

        result = rgbToXyz(255, 255, 255, false);
        expect(result.x).toBeCloseTo(95.05, 2);
        expect(result.y).toBeCloseTo(100.00, 2);
        expect(result.z).toBeCloseTo(108.88, 2);

        result = rgbToXyz(128, 128, 128, false);
        expect(result.x).toBeCloseTo(20.52, 2);
        expect(result.y).toBeCloseTo(21.59, 2);
        expect(result.z).toBeCloseTo(23.5, 2);
    });

    test('handles intermediate values correctly', () => {
        let result = rgbToXyz(192, 192, 192, false);
        expect(result.x).toBeCloseTo(50.1, 2);
        expect(result.y).toBeCloseTo(52.71, 2);
        expect(result.z).toBeCloseTo(57.39, 2);

        result = rgbToXyz(128, 128, 0, false);
        expect(result.x).toBeCloseTo(16.62, 2);
        expect(result.y).toBeCloseTo(20.03, 2);
        expect(result.z).toBeCloseTo(2.99, 2);

        result = rgbToXyz(0, 128, 128, false);
        expect(result.x).toBeCloseTo(11.61, 2);
        expect(result.y).toBeCloseTo(17, 2);
        expect(result.z).toBeCloseTo(23.09, 2);

        result = rgbToXyz(128, 0, 128, false);
        expect(result.x).toBeCloseTo(12.8, 2);
        expect(result.y).toBeCloseTo(6.15, 2);
        expect(result.z).toBeCloseTo(20.93, 2);
    });

    test('throws error for invalid values', () => {
        expect(() => rgbToXyz(-10, 50, 50)).toThrow('Invalid RGB color value -10, 50, 50');
        expect(() => rgbToXyz(256, 50, 50)).toThrow('Invalid RGB color value 256, 50, 50');
        expect(() => rgbToXyz(180, -10, 50)).toThrow('Invalid RGB color value 180, -10, 50');
        expect(() => rgbToXyz(180, 256, 50)).toThrow('Invalid RGB color value 180, 256, 50');
        expect(() => rgbToXyz(180, 50, -10)).toThrow('Invalid RGB color value 180, 50, -10');
        expect(() => rgbToXyz(180, 50, 256)).toThrow('Invalid RGB color value 180, 50, 256');
    });
});
