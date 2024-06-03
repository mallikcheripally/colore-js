import { parseRgb } from '@/parser/parseRgb';

describe('parseRgb', () => {
    test('parses RGB color with numbers correctly', () => {
        const result = parseRgb('rgb(255, 0, 0)');
        expect(result).toEqual({
            r: 255,
            rUnit: undefined,
            rNum: 255,
            g: 0,
            gUnit: undefined,
            gNum: 0,
            b: 0,
            bUnit: undefined,
            bNum: 0,
        });
    });

    test('parses RGB color with percentages correctly', () => {
        const result = parseRgb('rgb(100%, 0%, 0%)');
        expect(result).toEqual({
            r: 100,
            rUnit: '%',
            rNum: 255,
            g: 0,
            gUnit: '%',
            gNum: 0,
            b: 0,
            bUnit: '%',
            bNum: 0,
        });
    });

    test('parses RGB color with mixed units correctly', () => {
        const result = parseRgb('rgb(50%, 128, 0)');
        expect(result).toEqual({
            r: 50,
            rUnit: '%',
            rNum: 127,
            g: 128,
            gUnit: undefined,
            gNum: 128,
            b: 0,
            bUnit: undefined,
            bNum: 0,
        });
    });

    test('parses RGB color with spaces correctly', () => {
        const result = parseRgb('rgb( 255 , 0 , 0 )');
        expect(result).toEqual({
            r: 255,
            rUnit: undefined,
            rNum: 255,
            g: 0,
            gUnit: undefined,
            gNum: 0,
            b: 0,
            bUnit: undefined,
            bNum: 0,
        });
    });

    test('parses RGB color with different spacing correctly', () => {
        const result = parseRgb('rgb(255,0,0)');
        expect(result).toEqual({
            r: 255,
            rUnit: undefined,
            rNum: 255,
            g: 0,
            gUnit: undefined,
            gNum: 0,
            b: 0,
            bUnit: undefined,
            bNum: 0,
        });
    });

    test('throws error for invalid RGB color format', () => {
        expect(() => parseRgb('rgb(256, 0, 0)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgb(255, -1, 0)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgb(255, 0, -0%)')).toThrow('Invalid RGB color format');
        expect(() => parseRgb('rgb(100, 101%, 100)')).toThrow('Invalid RGB color format');
    });
});
