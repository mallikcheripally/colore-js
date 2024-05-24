import { hsvToRgb } from '@/conversions/hsvToRgb';

describe('hsvToRgb', () => {
    test('converts HSV values to RGB color string correctly', () => {
        expect(hsvToRgb(0, 100, 100)).toBe('rgb(255, 0, 0)');
        expect(hsvToRgb(120, 100, 100)).toBe('rgb(0, 255, 0)');
        expect(hsvToRgb(240, 100, 100)).toBe('rgb(0, 0, 255)');
        expect(hsvToRgb(60, 100, 100)).toBe('rgb(255, 255, 0)');
        expect(hsvToRgb(180, 100, 100)).toBe('rgb(0, 255, 255)');
        expect(hsvToRgb(300, 100, 100)).toBe('rgb(255, 0, 255)');
        expect(hsvToRgb(0, 0, 0)).toBe('rgb(0, 0, 0)');
        expect(hsvToRgb(0, 0, 100)).toBe('rgb(255, 255, 255)');
    });

    test('handles edge cases', () => {
        expect(hsvToRgb(0, 0, 50)).toBe('rgb(128, 128, 128)'); // Gray
        expect(hsvToRgb(30, 100, 100)).toBe('rgb(255, 128, 0)'); // Orange
    });
});
