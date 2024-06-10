import { triadicColors } from '@/harmony/triadicColors';

describe('triadicColors', () => {
    test('triadic colors of rgb(255, 0, 0) are rgb(0, 255, 0) and rgb(0, 0, 255)', () => {
        const result = triadicColors('rgb(255, 0, 0)');
        expect(result).toEqual(['rgb(0, 255, 0)', 'rgb(0, 0, 255)']);
    });

    test('triadic colors of rgba(255, 0, 0, 1) are rgba(0, 255, 0, 1) and rgba(0, 0, 255, 1)', () => {
        const result = triadicColors('rgba(255, 0, 0, 1)');
        expect(result).toEqual(['rgba(0, 255, 0, 1)', 'rgba(0, 0, 255, 1)']);
    });

    test('triadic colors of hsl(0, 100%, 50%) are hsl(120, 100%, 50%) and hsl(240, 100%, 50%)', () => {
        const result = triadicColors('hsl(0, 100%, 50%)');
        expect(result).toEqual(['hsl(120, 100%, 50%)', 'hsl(240, 100%, 50%)']);
    });

    test('triadic colors of hsla(0, 100%, 50%, 1) are hsla(120, 100%, 50%, 1) and hsla(240, 100%, 50%, 1)', () => {
        const result = triadicColors('hsla(0, 100%, 50%, 1)');
        expect(result).toEqual(['hsla(120, 100%, 50%, 1)', 'hsla(240, 100%, 50%, 1)']);
    });

    test('triadic colors of #ff0000 are #00ff00 and #0000ff', () => {
        const result = triadicColors('#ff0000');
        expect(result).toEqual(['#00ff00', '#0000ff']);
    });

    test('triadic colors of #ff0000ff are #00ff00ff and #0000ffff', () => {
        const result = triadicColors('#ff0000ff');
        expect(result).toEqual(['#00ff00ff', '#0000ffff']);
    });

    test('triadic colors of lab(50 40 30) are lab(50 -40 -30) and lab(50 -40 90)', () => {
        const result = triadicColors('lab(50 40 30)');
        expect(result).toEqual(['lab(50 -40 -30)', 'lab(50 -40 90)']);
    });

    test('triadic colors of lch(50 30 100) are lch(50 30 -20) and lch(50 30 220)', () => {
        const result = triadicColors('lch(50 30 100)');
        expect(result).toEqual(['lch(50 30 220)', 'lch(50 30 340)']);
    });

    test('triadic colors of red (named color) are lime and blue', () => {
        const result = triadicColors('red');
        expect(result).toEqual(['rgba(0, 255, 0, 1)', 'rgba(0, 0, 255, 1)']);
    });
});
