import { detectColorFormat } from '@/parser/detectColorFormat';

describe('detectColorFormat', () => {
    test('detects hex color format', () => {
        expect(detectColorFormat('#ff0000')).toBe('hex');
        expect(detectColorFormat('#123')).toBe('hex');
    });

    test('detects hex-alpha color format', () => {
        expect(detectColorFormat('#ff0000ff')).toBe('hex-alpha');
        expect(detectColorFormat('#1234')).toBe('hex-alpha');
    });

    test('detects rgb color format', () => {
        expect(detectColorFormat('rgb(255, 0, 0)')).toBe('rgb');
        expect(detectColorFormat('rgb(0, 255, 0)')).toBe('rgb');
    });

    test('detects rgba color format', () => {
        expect(detectColorFormat('rgba(255, 0, 0, 1)')).toBe('rgba');
        expect(detectColorFormat('rgba(0, 0, 255, 0.5)')).toBe('rgba');
    });

    test('detects hsl color format', () => {
        expect(detectColorFormat('hsl(0, 100%, 50%)')).toBe('hsl');
        expect(detectColorFormat('hsl(120, 100%, 50%)')).toBe('hsl');
    });

    test('detects hsla color format', () => {
        expect(detectColorFormat('hsla(0, 100%, 50%, 1)')).toBe('hsla');
        expect(detectColorFormat('hsla(240, 100%, 50%, 0.75)')).toBe('hsla');
    });

    test('detects named color format', () => {
        expect(detectColorFormat('red')).toBe('named');
        expect(detectColorFormat('blue')).toBe('named');
    });

    test('detects lch color format', () => {
        expect(detectColorFormat('lch(53.23% 104.55 40.00)')).toBe('lch');
    });

    test('detects xyz color format', () => {
        expect(detectColorFormat('xyz(41.24, 21.26, 1.93)')).toBe('xyz');
    });

    test('detects lab color format', () => {
        expect(detectColorFormat('lab(53.23% 80.09 67.2)')).toBe('lab');
    });

    test('returns unknown for invalid color format', () => {
        expect(detectColorFormat('notacolor')).toBe('unknown');
        expect(detectColorFormat('#xyz')).toBe('unknown');
    });
});
