import { labToXyz } from '@/conversions/labToXyz';

describe('labToXyz', () => {
    test('converts LAB values to XYZ color values correctly', () => {
        let [x, y, z] = labToXyz(53.23288178584245, 80.10930952982204, 67.22006831026425);
        expect(x).toBeCloseTo(41.24, 1);
        expect(y).toBeCloseTo(21.26, 1);
        expect(z).toBeCloseTo(1.93, 1);

        [x, y, z] = labToXyz(87.73703347354422, -86.18463649762525, 83.18116474777854);
        expect(x).toBeCloseTo(35.76, 1);
        expect(y).toBeCloseTo(71.52, 1);
        expect(z).toBeCloseTo(11.92, 1);

        [x, y, z] = labToXyz(32.29567256501325, 79.18559091020245, -107.8573002066949);
        expect(x).toBeCloseTo(18.05, 1);
        expect(y).toBeCloseTo(7.22, 1);
        expect(z).toBeCloseTo(95.05, 1);

        [x, y, z] = labToXyz(97.13950703971375, -21.55375051648618, 94.47812227661082);
        expect(x).toBeCloseTo(77.00, 1);
        expect(y).toBeCloseTo(92.78, 1);
        expect(z).toBeCloseTo(13.85, 1);

        [x, y, z] = labToXyz(91.11322037233457, -48.07961859102164, -14.138127754846148);
        expect(x).toBeCloseTo(53.81, 1);
        expect(y).toBeCloseTo(78.74, 1);
        expect(z).toBeCloseTo(106.97, 1);

        [x, y, z] = labToXyz(60.319933664076004, 98.25421868616108, -60.84313813154685);
        expect(x).toBeCloseTo(59.29, 1);
        expect(y).toBeCloseTo(28.48, 1);
        expect(z).toBeCloseTo(96.98, 1);

        [x, y, z] = labToXyz(0, 0, 0);
        expect(x).toBeCloseTo(0.00, 1);
        expect(y).toBeCloseTo(0.00, 1);
        expect(z).toBeCloseTo(0.00, 1);

        [x, y, z] = labToXyz(100.00000000000001, 0.00526049995830391, -0.010408184525267927);
        expect(x).toBeCloseTo(95.05, 1);
        expect(y).toBeCloseTo(100.00, 1);
        expect(z).toBeCloseTo(108.88, 1);
    });

    test('handles edge cases', () => {
        let [x, y, z] = labToXyz(53.585013452169026, 0.003563266679648726, -0.006290844383869461);
        expect(x).toBeCloseTo(20.52, 0.25);
        expect(y).toBeCloseTo(21.59, 0.25);
        expect(z).toBeCloseTo(23.32, 0.25);
    });
});
