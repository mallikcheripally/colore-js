import { saturateColor } from '@/manipulations/saturateColor';

describe('saturateColor', () => {
    test('saturates HSL color', () => {
        expect(saturateColor('hsl(0, 50%, 50%)', 50)).toBe('hsl(0, 75%, 50%)');
    });

    test('saturates HSLA color', () => {
        expect(saturateColor('hsla(0, 50%, 50%, 0.5)', 50)).toBe('hsla(0, 75%, 50%, 0.5)');
    });

    test('saturates RGB color', () => {
        expect(saturateColor('rgb(128, 128, 128)', 50)).toBe('rgb(191, 64, 64)');
    });

    test('saturates RGBA color', () => {
        expect(saturateColor('rgba(128, 128, 128, 0.5)', 50)).toBe('rgba(191, 64, 64, 0.5)');
    });

    test('saturates HEX color', () => {
        expect(saturateColor('#808080', 50)).toBe('#bf4040');
    });

    test('saturates HEX with alpha color', () => {
        expect(saturateColor('#80808080', 50)).toBe('#bf404080');
    });

    test('saturates LAB color', () => {
        expect(saturateColor('lab(50% 20 30)', 50)).toBe('lab(50 30 45)');
    });

    test('saturates LCH color', () => {
        expect(saturateColor('lch(50% 30 100)', 50)).toBe('lch(50% 45 100)');
    });

    // test('throws error for invalid color format', () => {
    //     expect(() => saturateColor('invalid', 50)).toThrow('Unsupported color format invalid for saturation');
    // });

    test('throws error for invalid amount', () => {
        expect(() => saturateColor('hsl(0, 50%, 50%)', 150)).toThrow('Invalid amount 150. Amount should be between 0 and 100.');
    });
});
