import { hexAlphaToHsva } from '@/conversions/hexAlphaToHsva';

describe('hexAlphaToHsva', () => {
    test('4-digit HEX with alpha to HSVA string by default', () => {
        expect(hexAlphaToHsva('#f0f5')).toBe('hsva(300, 100, 100, 0.3333333333333333)');
        expect(hexAlphaToHsva('#1234')).toBe('hsva(210, 67, 20, 0.26666666666666666)');
    });

    test('4-digit HEX with alpha to HSVA object when asString is false', () => {
        expect(hexAlphaToHsva('#f0f5', false)).toEqual({ h: 300, s: 100, v: 100, a: 0.3333333333333333 });
        expect(hexAlphaToHsva('#1234', false)).toEqual({ h: 210, s: 67, v: 20, a: 0.26666666666666666 });
    });

    test('8-digit HEX with alpha to HSVA string by default', () => {
        expect(hexAlphaToHsva('#ff00ff80')).toBe('hsva(300, 100, 100, 0.5019607843137255)');
        expect(hexAlphaToHsva('#123456ff')).toBe('hsva(210, 79, 34, 1)');
    });

    test('8-digit HEX with alpha to HSVA object when asString is false', () => {
        expect(hexAlphaToHsva('#ff00ff80', false)).toEqual({ h: 300, s: 100, v: 100, a: 0.5019607843137255 });
        expect(hexAlphaToHsva('#123456ff', false)).toEqual({ h: 210, s: 79, v: 34, a: 1 });
    });

    test('invalid HEX', () => {
        expect(() => hexAlphaToHsva('#xyz')).toThrow('Invalid HEX color #xyz');
        expect(() => hexAlphaToHsva('#12345')).toThrow('Invalid HEX color #12345');
        expect(() => hexAlphaToHsva('#123456789')).toThrow('Invalid HEX color #123456789');
    });
})
