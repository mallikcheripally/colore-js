import { rgbToXyz } from '@/conversions/rgbToXyz';

describe('rgbToXyz', () => {
    test('converts RGB values to XYZ color values correctly', () => {
        let [x, y, z] = rgbToXyz(255, 0, 0);
        expect(x).toBeCloseTo(41.24, 0.5);
        expect(y).toBeCloseTo(21.26, 0.5);
        expect(z).toBeCloseTo(1.93, 0.5);

        [x, y, z] = rgbToXyz(0, 255, 0);
        expect(x).toBeCloseTo(35.76, 0.5);
        expect(y).toBeCloseTo(71.52, 0.5);
        expect(z).toBeCloseTo(11.92, 0.5);

        [x, y, z] = rgbToXyz(0, 0, 255);
        expect(x).toBeCloseTo(18.04, 0.5);
        expect(y).toBeCloseTo(7.22, 0.5);
        expect(z).toBeCloseTo(95.05, 0.5);

        [x, y, z] = rgbToXyz(255, 255, 0);
        expect(x).toBeCloseTo(77.00, 0.5);
        expect(y).toBeCloseTo(92.78, 0.5);
        expect(z).toBeCloseTo(13.85, 0.5);

        [x, y, z] = rgbToXyz(0, 255, 255);
        expect(x).toBeCloseTo(53.81, 0.5);
        expect(y).toBeCloseTo(78.74, 0.5);
        expect(z).toBeCloseTo(106.97, 0.5);

        [x, y, z] = rgbToXyz(255, 0, 255);
        expect(x).toBeCloseTo(59.29, 0.5);
        expect(y).toBeCloseTo(28.48, 0.5);
        expect(z).toBeCloseTo(96.98, 0.5);

        [x, y, z] = rgbToXyz(0, 0, 0);
        expect(x).toBeCloseTo(0.00, 0.5);
        expect(y).toBeCloseTo(0.00, 0.5);
        expect(z).toBeCloseTo(0.00, 0.5);

        [x, y, z] = rgbToXyz(255, 255, 255);
        expect(x).toBeCloseTo(95.05, 0.5);
        expect(y).toBeCloseTo(100.00, 0.5);
        expect(z).toBeCloseTo(108.88, 0.5);
    });

    test('handles edge cases', () => {
        let [x, y, z] = rgbToXyz(128, 128, 128);
        expect(x).toBeCloseTo(20.52, 0.25);
        expect(y).toBeCloseTo(21.59, 0.25);
        expect(z).toBeCloseTo(23.32, 0.25);
    });
});
