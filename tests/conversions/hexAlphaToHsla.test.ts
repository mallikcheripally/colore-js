import { hexAlphaToHsla } from '@/conversions/hexAlphaToHsla';

describe('hexAlphaToHsla', () => {
    test('4-digit HEX with alpha to HSLA string by default', () => {
        expect(hexAlphaToHsla('#f0f5')).toBe('hsla(300, 100, 50, 0.3333333333333333)');
        expect(hexAlphaToHsla('#1234')).toBe('hsla(210, 50, 13, 0.26666666666666666)');
    });

    test('4-digit HEX with alpha to HSLA object when asString is false', () => {
        expect(hexAlphaToHsla('#f0f5', false)).toEqual({ h: 300, s: 100, l: 50, a: 0.3333333333333333 });
        expect(hexAlphaToHsla('#1234', false)).toEqual({ h: 210, s: 50, l: 13, a: 0.26666666666666666 });
    });

    test('8-digit HEX with alpha to HSLA string by default', () => {
        expect(hexAlphaToHsla('#ff00ff80')).toBe('hsla(300, 100, 50, 0.5019607843137255)');
        expect(hexAlphaToHsla('#123456ff')).toBe('hsla(210, 65, 20, 1)');
    });

    test('8-digit HEX with alpha to HSLA object when asString is false', () => {
        expect(hexAlphaToHsla('#ff00ff80', false)).toEqual({ h: 300, s: 100, l: 50, a: 0.5019607843137255 });
        expect(hexAlphaToHsla('#123456ff', false)).toEqual({ h: 210, s: 65, l: 20, a: 1 });
    });

    test('invalid HEX', () => {
        expect(() => hexAlphaToHsla('#xyz')).toThrow('Invalid HEX color #xyz');
        expect(() => hexAlphaToHsla('#12345')).toThrow('Invalid HEX color #12345');
        expect(() => hexAlphaToHsla('#123456789')).toThrow('Invalid HEX color #123456789');
    });
})
