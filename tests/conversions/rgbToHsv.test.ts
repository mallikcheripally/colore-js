import { rgbToHsv } from '@/conversions/rgbToHsv';

describe('rgbToHsv', () => {
    test('converts RGB values to HSV color string correctly', () => {
        expect(rgbToHsv(255, 0, 0)).toBe('hsv(0, 100%, 100%)');
        expect(rgbToHsv(0, 255, 0)).toBe('hsv(120, 100%, 100%)');
        expect(rgbToHsv(0, 0, 255)).toBe('hsv(240, 100%, 100%)');
        expect(rgbToHsv(255, 255, 0)).toBe('hsv(60, 100%, 100%)');
        expect(rgbToHsv(0, 255, 255)).toBe('hsv(180, 100%, 100%)');
        expect(rgbToHsv(255, 0, 255)).toBe('hsv(300, 100%, 100%)');
        expect(rgbToHsv(0, 0, 0)).toBe('hsv(0, 0%, 0%)');
        expect(rgbToHsv(255, 255, 255)).toBe('hsv(0, 0%, 100%)');
    });

    test('handles edge cases', () => {
        expect(rgbToHsv(128, 128, 128)).toBe('hsv(0, 0%, 50%)'); // Gray
        expect(rgbToHsv(255, 128, 0)).toBe('hsv(30, 100%, 100%)'); // Orange
    });
});
