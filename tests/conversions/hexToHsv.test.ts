import { hexToHsv } from '@/conversions/hexToHsv';

describe('hexToHsv', () => {
    test('converts hex values to HSV color string correctly', () => {
        expect(hexToHsv('#ff0000')).toBe('hsv(0, 100%, 100%)');
        expect(hexToHsv('#00ff00')).toBe('hsv(120, 100%, 100%)');
        expect(hexToHsv('#0000ff')).toBe('hsv(240, 100%, 100%)');
        expect(hexToHsv('#ffff00')).toBe('hsv(60, 100%, 100%)');
        expect(hexToHsv('#00ffff')).toBe('hsv(180, 100%, 100%)');
        expect(hexToHsv('#ff00ff')).toBe('hsv(300, 100%, 100%)');
        expect(hexToHsv('#000000')).toBe('hsv(0, 0%, 0%)');
        expect(hexToHsv('#ffffff')).toBe('hsv(0, 0%, 100%)');
    });

    test('handles edge cases', () => {
        expect(hexToHsv('#808080')).toBe('hsv(0, 0%, 50%)'); // Gray
        expect(hexToHsv('#ff8000')).toBe('hsv(30, 100%, 100%)'); // Orange
    });
});
