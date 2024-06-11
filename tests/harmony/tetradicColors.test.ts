import { tetradicColors } from '@/harmony/tetradicColors';

describe('tetradicColors', () => {
    test('finds tetradic colors for RGB color', () => {
        const result = tetradicColors('rgb(255, 0, 0)');
        expect(result).toEqual(['rgb(128, 255, 0)', 'rgb(0, 255, 255)', 'rgb(127, 0, 255)']);
    });

    test('finds tetradic colors for RGBA color', () => {
        const result = tetradicColors('rgba(255, 0, 0, 1)');
        expect(result).toEqual(['rgba(128, 255, 0, 1)', 'rgba(0, 255, 255, 1)', 'rgba(127, 0, 255, 1)']);
    });

    test('finds tetradic colors for HSL color', () => {
        const result = tetradicColors('hsl(0, 100%, 50%)');
        expect(result).toEqual(['hsl(90, 100%, 50%)', 'hsl(180, 100%, 50%)', 'hsl(270, 100%, 50%)']);
    });

    test('finds tetradic colors for HSLA color', () => {
        const result = tetradicColors('hsla(0, 100%, 50%, 1)');
        expect(result).toEqual(['hsla(90, 100%, 50%, 1)', 'hsla(180, 100%, 50%, 1)', 'hsla(270, 100%, 50%, 1)']);
    });

    test('finds tetradic colors for HEX color', () => {
        const result = tetradicColors('#ff0000');
        expect(result).toEqual(['#80ff00', '#00ffff', '#7f00ff']);
    });

    test('finds tetradic colors for HEX color', () => {
        const result = tetradicColors('#ff0000ff');
        expect(result).toEqual(['#80ff00ff', '#00ffffff', '#7f00ffff']);
    });

    test('finds tetradic colors for LAB color', () => {
        const result = tetradicColors('lab(50 40 30)');
        expect(result).toEqual(['lab(50 -40 -30)', 'lab(50 40 120)', 'lab(50 40 210)']);
    });

    test('finds tetradic colors for LCH color', () => {
        const result = tetradicColors('lch(50 30 100)');
        expect(result).toEqual(['lch(50 30 190)', 'lch(50 30 280)', 'lch(50 30 10)']);
    });

    test('finds tetradic colors for Named color', () => {
        const result = tetradicColors('red');
        expect(result).toEqual(['rgba(128, 255, 0, 1)', 'rgba(0, 255, 255, 1)', 'rgba(127, 0, 255, 1)']);
    });
});
