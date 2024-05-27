import { labToXyz } from '@/conversions/labToXyz';

describe('labToXyz', () => {
    const xyzCloseTo = (received: string, expected: string, tolerance: number = 1): boolean => {
        const extractXyz = (xyz: string) => {
            const [x, y, z] = xyz.match(/(\d+(\.\d+)?)/g)?.map(Number) || [];
            return { x, y, z };
        };

        const receivedXyz = extractXyz(received);
        const expectedXyz = extractXyz(expected);

        return (
            Math.abs(receivedXyz.x - expectedXyz.x) <= tolerance &&
            Math.abs(receivedXyz.y - expectedXyz.y) <= tolerance &&
            Math.abs(receivedXyz.z - expectedXyz.z) <= tolerance
        );
    };

    test('converts LAB to XYZ string correctly', () => {
        expect(xyzCloseTo(labToXyz(53.24, 80.09, 67.20), 'xyz(41.24, 21.26, 1.93)')).toBe(true); // Example 1
        expect(xyzCloseTo(labToXyz(87.74, -86.18, 83.18), 'xyz(35.76, 71.52, 11.92)')).toBe(true); // Example 2
        expect(xyzCloseTo(labToXyz(32.30, 79.20, -107.86), 'xyz(18.05, 7.22, 95.05)')).toBe(true); // Example 3
        expect(xyzCloseTo(labToXyz(97.14, -21.55, 94.48), 'xyz(77.00, 92.78, 13.85)')).toBe(true); // Example 4
        expect(xyzCloseTo(labToXyz(0.00, 0.00, 0.00), 'xyz(0.00, 0.00, 0.00)')).toBe(true); // Black
        expect(xyzCloseTo(labToXyz(100.00, 0.00, 0.00), 'xyz(95.05, 100.00, 108.88)')).toBe(true); // White
        expect(xyzCloseTo(labToXyz(53.59, 0.00, 0.00), 'xyz(20.52, 21.59, 23.32)')).toBe(true); // Grey
    });

    test('converts LAB to XYZ object correctly', () => {
        let result = labToXyz(53.24, 80.09, 67.20, false);
        expect(result.x).toBeCloseTo(41.24, 2);
        expect(result.y).toBeCloseTo(21.27, 2);
        expect(result.z).toBeCloseTo(1.93, 2);

        result = labToXyz(87.74, -86.18, 83.18, false);
        expect(result.x).toBeCloseTo(35.77, 2);
        expect(result.y).toBeCloseTo(71.53, 2);
        expect(result.z).toBeCloseTo(11.92, 2);

        result = labToXyz(32.30, 79.20, -107.86, false);
        expect(result.x).toBeCloseTo(18.05, 2);
        expect(result.y).toBeCloseTo(7.22, 2);
        expect(result.z).toBeCloseTo(95.04, 2);

        result = labToXyz(97.14, -21.55, 94.48, false);
        expect(result.x).toBeCloseTo(77.01, 2);
        expect(result.y).toBeCloseTo(92.78, 2);
        expect(result.z).toBeCloseTo(13.85, 2);

        result = labToXyz(0.00, 0.00, 0.00, false);
        expect(result.x).toBeCloseTo(0.00, 2);
        expect(result.y).toBeCloseTo(0.00, 2);
        expect(result.z).toBeCloseTo(0.00, 2);

        result = labToXyz(100.00, 0.00, 0.00, false);
        expect(result.x).toBeCloseTo(95.05, 2);
        expect(result.y).toBeCloseTo(100.00, 2);
        expect(result.z).toBeCloseTo(108.88, 2);

        result = labToXyz(53.59, 0.00, 0.00, false);
        expect(result.x).toBeCloseTo(20.52, 2);
        expect(result.y).toBeCloseTo(21.59, 2);
        expect(result.z).toBeCloseTo(23.51, 2);
    });

    test('handles intermediate values correctly', () => {
        let result = labToXyz(60.00, 10.00, 20.00, false);
        expect(result.x).toBeCloseTo(29.25, 2);
        expect(result.y).toBeCloseTo(28.12, 2);
        expect(result.z).toBeCloseTo(18.63, 2);

        result = labToXyz(70.00, -20.00, 20.00, false);
        expect(result.x).toBeCloseTo(32.79, 2);
        expect(result.y).toBeCloseTo(40.75, 2);
        expect(result.z).toBeCloseTo(28.73, 2);

        result = labToXyz(50.00, 50.00, -50.00, false);
        expect(result.x).toBeCloseTo(28.45, 2);
        expect(result.y).toBeCloseTo(18.42, 2);
        expect(result.z).toBeCloseTo(59.81, 2);

        result = labToXyz(30.00, 20.00, 10.00, false);
        expect(result.x).toBeCloseTo(7.91, 2);
        expect(result.y).toBeCloseTo(6.24, 2);
        expect(result.z).toBeCloseTo(4.53, 2);
    });

    test('throws error for invalid values', () => {
        expect(() => labToXyz(-10, 0, 0)).toThrow('Invalid LAB color value -10, 0,0');
        expect(() => labToXyz(50, -129, 0)).toThrow('Invalid LAB color value 50, -129,0');
        expect(() => labToXyz(50, 0, 128)).toThrow('Invalid LAB color value 50, 0,128');
        expect(() => labToXyz(101, 0, 0)).toThrow('Invalid LAB color value 101, 0,0');
    });
});
