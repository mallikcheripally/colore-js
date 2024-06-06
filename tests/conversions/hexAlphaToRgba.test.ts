import { hexAlphaToRgba } from '@/conversions/hexAlphaToRgba';

describe('hexAlphaToRgba', () => {
    test('4-digit HEX with alpha to RGBA string by default', () => {
        expect(hexAlphaToRgba('#f0f5')).toBe('rgba(255, 0, 255, 0.3333333333333333)');
        expect(hexAlphaToRgba('#1234')).toBe('rgba(17, 34, 51, 0.26666666666666666)');
    });

    test('4-digit HEX with alpha to RGBA object when asString is false', () => {
        expect(hexAlphaToRgba('#f0f5', false)).toEqual({ r: 255, g: 0, b: 255, a: 0.3333333333333333 });
        expect(hexAlphaToRgba('#1234', false)).toEqual({ r: 17, g: 34, b: 51, a: 0.26666666666666666 });
    });

    test('8-digit HEX with alpha to RGBA string by default', () => {
        expect(hexAlphaToRgba('#ff00ff80')).toBe('rgba(255, 0, 255, 0.5019607843137255)');
        expect(hexAlphaToRgba('#123456ff')).toBe('rgba(18, 52, 86, 1)');
    });

    test('8-digit HEX with alpha to RGBA object when asString is false', () => {
        expect(hexAlphaToRgba('#ff00ff80', false)).toEqual({ r: 255, g: 0, b: 255, a: 0.5019607843137255 });
        expect(hexAlphaToRgba('#123456ff', false)).toEqual({ r: 18, g: 52, b: 86, a: 1 });
    });

    test('invalid HEX', () => {
        expect(() => hexAlphaToRgba('#xyz')).toThrow('Invalid HEX color #xyz');
        expect(() => hexAlphaToRgba('#12345')).toThrow('Invalid HEX color #12345');
        expect(() => hexAlphaToRgba('#123456789')).toThrow('Invalid HEX color #123456789');
    });
})
