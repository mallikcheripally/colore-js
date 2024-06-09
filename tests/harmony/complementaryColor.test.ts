import { complementaryColor } from '@/harmony/complementaryColor';

describe('complementaryColor', () => {
    test('complementary of rgb(255, 0, 0) is rgb(0, 255, 255)', () => {
        expect(complementaryColor('rgb(255, 0, 0)')).toBe('rgb(0, 255, 255)');
    });

    test('complementary of rgba(255, 0, 0, 1) is rgba(0, 255, 255, 1)', () => {
        expect(complementaryColor('rgba(255, 0, 0, 1)')).toBe('rgba(0, 255, 255, 1)');
    });

    test('complementary of hsl(0, 100%, 50%) is hsl(180, 100%, 50%)', () => {
        expect(complementaryColor('hsl(0, 100%, 50%)')).toBe('hsl(180, 100%, 50%)');
    });

    test('complementary of hsla(0, 100%, 50%, 1) is hsla(180, 100%, 50%, 1)', () => {
        expect(complementaryColor('hsla(0, 100%, 50%, 1)')).toBe('hsla(180, 100%, 50%, 1)');
    });

    test('complementary of #ff0000 is #00ffff', () => {
        expect(complementaryColor('#ff0000')).toBe('#00ffff');
    });

    test('complementary of #ff0000ff is #00ffffff', () => {
        expect(complementaryColor('#ff0000ff')).toBe('#00ffffff');
    });

    test('complementary of lab(50 40 30) is lab(50 -40 -30)', () => {
        expect(complementaryColor('lab(50 40 30)')).toBe('lab(50 -40 -30)');
    });

    test('complementary of lch(50 30 100) is lch(50 30 280)', () => {
        expect(complementaryColor('lch(50 30 100)')).toBe('lch(50 30 280)');
    });

    test('throw error for unsupported format', () => {
        expect(() => complementaryColor('red')).toThrow('Unsupported color format red for complementary color calculation');
    });
});
