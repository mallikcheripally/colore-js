import { rgbToCmyk } from '@/conversions/rgbToCmyk';

describe('rgbToCmyk', () => {
    test('converts RGB values to CMYK color string correctly', () => {
        expect(rgbToCmyk(255, 0, 0)).toBe('cmyk(0, 100, 100, 0)');
        expect(rgbToCmyk(0, 255, 0)).toBe('cmyk(100, 0, 100, 0)');
        expect(rgbToCmyk(0, 0, 255)).toBe('cmyk(100, 100, 0, 0)');
        expect(rgbToCmyk(255, 255, 0)).toBe('cmyk(0, 0, 100, 0)');
        expect(rgbToCmyk(0, 255, 255)).toBe('cmyk(100, 0, 0, 0)');
        expect(rgbToCmyk(255, 0, 255)).toBe('cmyk(0, 100, 0, 0)');
        expect(rgbToCmyk(0, 0, 0)).toBe('cmyk(0, 0, 0, 100)');
        expect(rgbToCmyk(255, 255, 255)).toBe('cmyk(0, 0, 0, 0)');
    });
});
