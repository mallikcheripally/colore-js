import { parseRgba } from '@/parser/parseRgba';

describe('parseRgba', () => {
    test('parses RGBA color with numbers correctly', () => {
        const result = parseRgba('rgba(255, 0, 0, 1)');
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
            a: 1,
            aUnit: undefined,
            aNum: 1,
        });
    });

    test('parses RGBA color with percentages correctly', () => {
        const result = parseRgba('rgba(100%, 0%, 0%, 50%)');
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
            a: 50,
            aUnit: '%',
            aNum: 0.5,
        });
    });

    test('parses RGBA color with mixed units correctly', () => {
        const result = parseRgba('rgba(50%, 128, 0, 0.25)');
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
            a: 0.25,
            aUnit: undefined,
            aNum: 0.25,
        });
    });

    test('parses RGBA color with spaces correctly', () => {
        const result = parseRgba('rgba( 255 , 0 , 0 , 0.5 )');
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
            a: 0.5,
            aUnit: undefined,
            aNum: 0.5,
        });
    });

    test('parses RGBA color with different spacing correctly', () => {
        const result = parseRgba('rgba(255,0,0,0.5)');
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
            a: 0.5,
            aUnit: undefined,
            aNum: 0.5,
        });
    });

    test('throws error for invalid RGBA color format', () => {
        expect(() => parseRgba('rgba(256, 0, 0, 0.5)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, -1, 0, 0.5)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0, 1.5)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(100%, 100%, 100%, 200%)')).toThrow('Invalid RGBA color format');
        expect(() => parseRgba('rgba(255, 0, 0)')).toThrow('Invalid RGBA color format');
    });
});
